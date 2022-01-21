import * as React from "react";
import ListIcon from "@mui/icons-material/List";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../redux/nav.slice";
import { setLang } from "../../redux/app.slice";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { routes } from "../../utils/routes";
import {
  Box,
  SwipeableDrawer,
  Button,
  List,
  Divider,
  ListItem,
  ListItemText,
} from "@mui/material";

export default function NavigationDrawer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = React.useState(false);
  const { lang } = useSelector(({ appSlice }) => appSlice);
  const { page } = useSelector(({ navSlice }) => navSlice);
  const { t, i18n } = useTranslation();

  const toggleDrawer = (open) => setIsOpen(open);
  const handleClick = (path) => {
    navigate(path);
    dispatch(setPage(path));
  };
  const handleLangChange = (lang) => {
    dispatch(setLang(lang));
    i18n.changeLanguage(lang);
  };

  const list = () => (
    <Box
      role="presentation"
      onClick={() => toggleDrawer(false)}
      onKeyDown={() => toggleDrawer(false)}
    >
      <List>
        {routes.map(({ id, name, path }) => (
          <ListItem
            button
            key={id}
            onClick={() => handleClick(path)}
            selected={page === path}
          >
            <ListItemText
              secondary={t(`menu.${name}`)}
              secondaryTypographyProps={{
                color: page === path ? "#FF9A00" : "rgba(0, 0, 0, 0.6)",
              }}
            />
          </ListItem>
        ))}
      </List>
      <Divider>
        <StyledDividerName>Język</StyledDividerName>
      </Divider>
      <List>
        {["PL", "RUS", "EN"].map((text, index) => (
          <ListItem
            button
            key={text}
            selected={lang === text}
            onClick={() => handleLangChange(text)}
          >
            <ListItemText
              secondary={text}
              secondaryTypographyProps={{
                color: lang === text ? "#FF9A00" : "rgba(0, 0, 0, 0.6)",
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <StyledNavBox>
      <React.Fragment>
        <Button onClick={() => toggleDrawer(true)}>
          <ListIcon
            fontSize="large"
            htmlColor="white"
            onClick={() => toggleDrawer(true)}
          />
        </Button>
        <SwipeableDrawer
          anchor={"left"}
          open={isOpen}
          onClose={() => toggleDrawer(false)}
          onOpen={() => toggleDrawer(true)}
        >
          {list()}
        </SwipeableDrawer>
      </React.Fragment>
    </StyledNavBox>
  );
}
const StyledNavBox = styled.div`
  display: none;
  @media screen and (max-width: ${({ theme }) => theme.resolutions.tablet}) {
    display: block;
  }
`;
const StyledDividerName = styled.span`
  ${({ theme }) => theme.fonts.body.small}
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.dark[300]};
`;
