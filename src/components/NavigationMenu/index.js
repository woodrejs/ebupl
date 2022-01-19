import React, { useState, useEffect } from "react";
import { Tabs, Tab } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../redux/nav.slice";

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
    path: "/offer",
  },
  {
    id: uuidv4(),
    name: "Kontakt",
    path: "/contact",
  },
];

export default function NavigationMenu() {
  const dispatch = useDispatch();
  const page = useSelector(({ navSlice }) => navSlice.page);
  const { pathname } = useLocation();

  const handleClick = (path) => {
    dispatch(setPage(path));
  };

  useEffect(() => {
    const path = getPathName(routes, pathname);
    dispatch(setPage(path));
  }, [pathname]);

  return (
    <StyledTabs value={page}>
      {routes.map(({ id, name, path }) => (
        <StyledTab
          key={id}
          label={name}
          value={path}
          component={Link}
          to={path}
          onClick={() => handleClick(path)}
        />
      ))}
    </StyledTabs>
  );
}

function getPathName(routes, pathname) {
  const result = routes.find((route) => route.path === pathname);

  if (result) return result.path;

  if (!result) return false;
}

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
