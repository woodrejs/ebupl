import React from "react";
import styled from "styled-components";
import NavigationMenu from "../NavigationMenu";
import { AppBar } from "@mui/material";

export default function NavigationBar() {
  return (
    <StyledAppBar>
      <StyledContainer>
        <StyledLogo />
        <NavigationMenu />
        <StyledLangBox>
          <StyledLang active>PL</StyledLang>
          <StyledLang>ENG</StyledLang>
          <StyledLang>RUS</StyledLang>
        </StyledLangBox>
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
`;

const StyledLogo = styled.div`
  border-radius: 50px;
  height: 40px;
  width: 40px;
  background-color: white;

  margin-right: 100px;
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
