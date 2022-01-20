import * as React from "react";
import ListIcon from "@mui/icons-material/List";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { setPage } from "../../redux/nav.slice";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  Box,
  SwipeableDrawer,
  Button,
  List,
  Divider,
  ListItem,
  ListItemText,
} from "@mui/material";

const routes = [
  {
    id: uuidv4(),
    name: "Home",
    path: "/",
  },
  {
    id: uuidv4(),
    name: "O nas",
    path: "/about",
  },
  {
    id: uuidv4(),
    name: "Oferta",
    path: "/offers",
  },
  {
    id: uuidv4(),
    name: "Kontakt",
    path: "/contact",
  },
];

export default function NavigationDrawer() {
  const [isOpen, setIsOpen] = React.useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate(path);
    dispatch(setPage(path));
  };

  const toggleDrawer = (open) => setIsOpen(open);

  const list = () => (
    <Box
      role="presentation"
      onClick={() => toggleDrawer(false)}
      onKeyDown={() => toggleDrawer(false)}
    >
      <List>
        {routes.map(({ id, name, path }) => (
          <ListItem button key={id} onClick={() => handleClick(path)}>
            <ListItemText primary={name} />
          </ListItem>
        ))}
      </List>
      <Divider>
        <StyledDividerName>Język</StyledDividerName>
      </Divider>
      <List>
        {["PL", "RUS", "ENG"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
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
const StyledDividerName = styled.span``;
