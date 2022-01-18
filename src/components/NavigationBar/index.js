import React, { useState, useEffect } from "react";
import { Tabs, Tab, AppBar } from "@mui/material";
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

export default function NavigationBar() {
  const { pathname } = useLocation();
  const [value, setValue] = useState(false);

  useEffect(() => {
    setValue(getPathName(routes, pathname));
  }, [pathname]);

  return (
    <StyledAppBar>
      <StyledContainer>
        <StyledLogo />
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
        <StyledLangBox>
          <StyledLang active>PL</StyledLang>
          <StyledLang>ENG</StyledLang>
          <StyledLang>RUS</StyledLang>
        </StyledLangBox>
      </StyledContainer>
    </StyledAppBar>
  );
}

function getPathName(routes, pathname) {
  const result = routes.find((route) => route.path === pathname);

  if (result) return result.path;

  if (!result) return false;
}

const StyledAppBar = styled((props) => {
  return <AppBar {...props}></AppBar>;
})`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.primary[700]};
  }
`;
const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1366px;
  align-items: center;
`;
const StyledTabs = styled((props) => {
  return <Tabs {...props} classes={{ indicator: "indicator" }}></Tabs>;
})`
  && {
    flex: 1;
    padding-left: 50px;
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
const StyledLogo = styled.div`
  border-radius: 50px;
  height: 40px;
  width: 40px;
  background-color: white;
`;
const StyledLangBox = styled.div`
  display: flex;
  flex-direction: row;
`;
const StyledLang = styled.span`
  margin-left: 20px;
  cursor: pointer;

  color: ${({ theme, active }) =>
    active ? theme.colors.secoundary[500] : theme.colors.light[700]};
`;
