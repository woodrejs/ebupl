import React, { useEffect } from "react";
import { Tabs, Tab } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../redux/nav.slice";
import { useTranslation } from "react-i18next";
import { routes } from "../../utils/routes";

export default function NavigationMenu() {
  const dispatch = useDispatch();
  const page = useSelector(({ navSlice }) => navSlice.page);
  const { t } = useTranslation();
  const { pathname } = useLocation();

  const handleClick = (path) => {
    dispatch(setPage(path));
  };

  useEffect(() => {
    const path = getPathName(routes, pathname);
    dispatch(setPage(path));
  }, [pathname]);

  return (
    <StyledNavBox>
      <StyledTabs value={page}>
        {routes.map(({ id, name, path }) => (
          <StyledTab
            key={id}
            label={t(`menu.${name}`)}
            value={path}
            component={Link}
            to={path}
            onClick={() => handleClick(path)}
          />
        ))}
      </StyledTabs>
    </StyledNavBox>
  );
}

function getPathName(routes, pathname) {
  const result = routes.find((route) => route.path === pathname);

  if (result) return result.path;

  if (!result) return false;
}
const StyledNavBox = styled.div`
  @media screen and (max-width: ${({ theme }) => theme.resolutions.tablet}) {
    display: none;
  }
  flex: 1;
`;
const StyledTabs = styled((props) => {
  return <Tabs {...props} classes={{ indicator: "indicator" }}></Tabs>;
})`
  && {
    flex: 1;
  }
  && .indicator {
    background-color: ${({ theme }) => theme.colors.light[700]};
  }
`;
const StyledTab = styled(Tab)(({ theme }) => ({
  backgroundColor: "transparent",
  color: theme.colors.light[500] + " !important",

  "&.Mui-selected": {
    color: theme.colors.light[700] + " !important",
  },
}));
