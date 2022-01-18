import React, { useState, useEffect } from "react";
import { Tabs, Tab } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";

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
  {
    id: uuidv4(),
    name: "Cennik",
    path: "/pricing",
  },
];

export default function NavigationMenu() {
  const { pathname } = useLocation();
  const [value, setValue] = useState(false);

  useEffect(() => {
    setValue(getPathName(routes, pathname));
  }, [pathname]);

  return (
    <StyledTabs value={value}>
      {routes.map(({ id, name, path }) => (
        <StyledTab
          key={id}
          label={name}
          value={path}
          component={Link}
          to={path}
          onClick={() => setValue(path)}
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
