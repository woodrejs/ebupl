import React from "react";
import Grid from "@mui/material/Grid";
import styled from "styled-components";

export default function ContactSection() {
  return (
    <StyledSection className="contactSection">
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
