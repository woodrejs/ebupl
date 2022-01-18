import React from "react";
import Grid from "@mui/material/Grid";
import styled from "styled-components";
import CopyrightIcon from "@mui/icons-material/Copyright";
import NavigationMenu from "../NavigationMenu";

export default function Footer() {
  return (
    <StyledSection>
      <StyledArticle>
        <Grid container spacing={2} rowSpacing={10}>
          <Grid item xs={12} md={6} lg={3}>
            <StyledContentBox>
              <StyledH3>Chcesz nas odwiedzić?</StyledH3>
              <StyledP>
                WROCŁAW 54-203 ul. Grabiszyńska 128 +48 503-634-667 biuro@ebu.eu
              </StyledP>
            </StyledContentBox>
          </Grid>
          <Grid item xs={12} md={6} lg={9}>
            <StyledMap />
          </Grid>
        </Grid>
      </StyledArticle>
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
const StyledArticle = styled.article`
  max-width: 1366px;
  margin: 0 auto;
  padding: 40px 40px;
  width: 100%;
`;
const StyledMap = styled.div`
  background-color: white;
  height: 300px;
  width: 100%;
`;
const StyledH3 = styled.h3`
  ${({ theme }) => theme.fonts.headers.h3};
  color: ${({ theme }) => theme.colors.light[700]};
  margin-bottom: 20px;
`;
const StyledP = styled.p`
  ${({ theme }) => theme.fonts.body.default};
  color: ${({ theme }) => theme.colors.light[700]};
`;
const StyledContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
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
