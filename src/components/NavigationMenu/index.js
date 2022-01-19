import React, { useState, useEffect } from "react";
import { Tabs, Tab } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import { scroller } from "react-scroll";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../redux/nav.slice";

const routes = [
  {
    id: uuidv4(),
    name: "Home",
    path: "/",
    scroll: "heroSection",
  },
  {
    id: uuidv4(),
    name: "O nas",
    path: "/about",
    scroll: "aboutSection",
  },
  {
    id: uuidv4(),
    name: "Oferta",
    path: "/offer",
    scroll: "offerSection",
  },
  {
    id: uuidv4(),
    name: "Kontakt",
    path: "/contact",
    scroll: "contactSection",
  },
];

export default function NavigationMenu() {
  const dispatch = useDispatch();
  const page = useSelector(({ navSlice }) => navSlice.page);
  const { pathname } = useLocation();

  const handleClick = (path, scroll) => {
    dispatch(setPage(path));

    if (scroll) {
      scroller.scrollTo(scroll, { smooth: true });
    }
  };

  useEffect(() => {
    const path = getPathName(routes, pathname);
    dispatch(setPage(path));
  }, [pathname]);

  return (
    <StyledTabs value={page}>
      {routes.map(({ id, name, path, scroll }) => (
        <StyledTab
          key={id}
          label={name}
          value={path}
          component={Link}
          to={path}
          onClick={() => handleClick(path, scroll)}
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
