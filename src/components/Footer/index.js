import React from "react";
import styled from "styled-components";
import CopyrightIcon from "@mui/icons-material/Copyright";
import NavigationMenu from "../NavigationMenu";

export default function Footer() {
  return (
    <StyledSection>
      <StyledBottomBar>
        <StyledBottomBarContainer>
          <NavigationMenu />
          <StyledCopywriterBox>
            <CopyrightIcon fontSize="small" htmlColor="rgba(255,255,255,0.4)" />
            <StyledCopywriter>copywriter</StyledCopywriter>
          </StyledCopywriterBox>
        </StyledBottomBarContainer>
      </StyledBottomBar>
    </StyledSection>
  );
}

const StyledSection = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary[500]};
`;
const StyledBottomBar = styled.div`
  background-color: ${({ theme }) => theme.colors.primary[700]};
`;
const StyledBottomBarContainer = styled.div`
  max-width: 1366px;
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StyledCopywriterBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StyledCopywriter = styled.span`
  color: ${({ theme }) => theme.colors.light[500]};
  margin-left: 10px;
  font-size: 12px;
`;
