import React from "react";
import styled from "styled-components";
import NavigationMenu from "../NavigationMenu";
import LanguagePanel from "../LanguagePanel";
import NavigationDrawer from "../NavigationDrawer";
import { AppBar } from "@mui/material";

export default function NavigationBar() {
  return (
    <StyledAppBar>
      <StyledContainer>
        <StyledLogo />
        <NavigationDrawer />
        <NavigationMenu />
        <LanguagePanel />
      </StyledContainer>
    </StyledAppBar>
  );
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
  padding: 0 20px;

  @media screen and (max-width: ${({ theme }) => theme.resolutions.tablet}) {
    justify-content: space-between;
    padding: 5px 5px 5px 20px;
  }
`;
const StyledLogo = styled.div`
  border-radius: 50px;
  height: 40px;
  width: 40px;
  background-color: white;

  margin-right: 100px;

  @media screen and (max-width: ${({ theme }) => theme.resolutions.desktop}) {
    margin-right: 30px;
  }
`;
