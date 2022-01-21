import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";

// t("aboutSection.openBtn")
export default function AboutSection() {
  const { t } = useTranslation();

  return (
    <StyledSection className="aboutSection">
      <StyledArticle>
        <StyledContentBox>
          <StyledH1>{t("aboutSection.title")}</StyledH1>
          <StyledP>{t("aboutSection.text")}</StyledP>
          <Button variant="contained">{t("aboutSection.closeBtn")}</Button>
        </StyledContentBox>
      </StyledArticle>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  background-color: ${({ theme }) => theme.colors.primary[300]};
`;
const StyledArticle = styled.article`
  max-width: 1366px;
  margin: 0 auto;
  padding: 140px 40px;
  width: 100%;
`;
const StyledContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  }
`;
