import React from "react";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import IconCard from "../../components/IconCard";
import { offersData } from "../../utils/offers.data";
import { useTranslation } from "react-i18next";

export default function OfferSection() {
  const { t } = useTranslation();
  return (
    <StyledSection className="offerSection">
      <StyledArticle>
        <StyledContentBox>
          <StyledH1>{t("offersSection.title")}</StyledH1>
          <StyledP>{t("offersSection.text")}</StyledP>
        </StyledContentBox>
        <StyledIconsBox>
          <Grid container spacing={2} rowSpacing={10}>
            {offersData.map(({ id, src, title, alt, name }) => (
              <IconCard key={id} src={src} alt={alt} title={title} name={name} />
            ))}
          </Grid>
        </StyledIconsBox>
      </StyledArticle>
    </StyledSection>
  );
}
const StyledSection = styled.section`
  margin-top: 50px;
  max-width: 1366px;
  padding: 140px 40px;
  margin: 0 auto;
`;
const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const StyledContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
`;
const StyledH1 = styled.h1`
  ${({ theme }) => theme.fonts.headers.h1};
  color: ${({ theme }) => theme.colors.primary[700]};
  margin-bottom: 40px;
  text-align: center;
  @media screen and (max-width: ${({ theme }) => theme.resolutions.mobile}) {
    ${({ theme }) => theme.fonts.headers.h2};
    margin-bottom: 20px;
  }
`;
const StyledP = styled.p`
  ${({ theme }) => theme.fonts.body.default};
  color: ${({ theme }) => theme.colors.dark[500]};
  text-align: center;
  margin-bottom: 50px;
  max-width: 980px;

  @media screen and (max-width: ${({ theme }) => theme.resolutions.mobile}) {
    ${({ theme }) => theme.fonts.body.small};

    margin-bottom: 20px;
  }
`;
const StyledIconsBox = styled.div`
  width: 100%;
`;
