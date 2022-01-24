import React, { useState } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";

export default function AboutSection() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const list = t(`aboutSection.list`)?.split("+");

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledSection className="aboutSection">
      <StyledArticle>
        <StyledContentBox style={{ height: isOpen ? "100%" : "290px" }}>
          <StyledH1>{t("aboutSection.title")}</StyledH1>
          <StyledP>{t("aboutSection.text")}</StyledP>
          <StyledList>
            {list.map((item, index) => (
              <StyledListItem key={index}>{item}</StyledListItem>
            ))}
          </StyledList>
        </StyledContentBox>
        <Button variant="contained" onClick={handleToggle}>
          {isOpen ? t("aboutSection.openBtn") : t("aboutSection.closeBtn")}
        </Button>
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
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  margin-bottom: 50px;
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
const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
const StyledListItem = styled.li`
  ${({ theme }) => theme.fonts.body.default};
  color: ${({ theme }) => theme.colors.dark[500]};
  text-align: center;
  margin-bottom: 10px;

  @media screen and (max-width: ${({ theme }) => theme.resolutions.mobile}) {
    ${({ theme }) => theme.fonts.body.small};
  }
`;
