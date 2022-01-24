import React from "react";
import Grid from "@mui/material/Grid";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { WrappedMap } from "../../components/CustomMap";

export default function ContactSection() {
  const { t } = useTranslation();

  return (
    <StyledSection className="contactSection">
      <StyledArticle>
        <Grid container spacing={2} rowSpacing={10}>
          <Grid item xs={12} md={6} lg={3}>
            <StyledContentBox>
              <StyledH3>{t("contactSection.title")}</StyledH3>
              <StyledP>
                {t("contactSection.address.city")} 54-203
                <br />
                ul. {t("contactSection.address.street")} 128
                <br />
                +48 503-634-667
                <br />
                biuro@ebu.eu
              </StyledP>
            </StyledContentBox>
          </Grid>
          <Grid item xs={12} md={6} lg={9}>
            <WrappedMap
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `100%` }} />}
              mapElement={<div style={{ height: `300px` }} />}
            />
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

const StyledH3 = styled.h3`
  ${({ theme }) => theme.fonts.headers.h3};
  color: ${({ theme }) => theme.colors.light[700]};
  margin-bottom: 20px;
  @media screen and (max-width: ${({ theme }) => theme.resolutions.desktop}) {
    text-align: center;
  }
`;
const StyledP = styled.p`
  ${({ theme }) => theme.fonts.body.default};
  color: ${({ theme }) => theme.colors.light[700]};

  @media screen and (max-width: ${({ theme }) => theme.resolutions.desktop}) {
    text-align: center;
  }
`;
const StyledContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;

  @media screen and (max-width: ${({ theme }) => theme.resolutions.desktop}) {
    align-items: center;
  }
`;
