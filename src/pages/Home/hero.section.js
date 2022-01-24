import React from "react";
import styled from "styled-components";
import investment_img from "../../assets/icons/investment_img.svg";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { setPage } from "../../redux/nav.slice";
import { useTranslation } from "react-i18next";


export default function HeroSection() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleContainedButton = () => {
    dispatch(setPage("/offer"));
  };
  const handleOutlinedButton = () => {
    dispatch(setPage("/contact"));
  };

  return (
    <StyledSection className="heroSection">
      <StyledArticle>
        <StyledContentBox>
          <StyledH1>{t("heroSection.title")}</StyledH1>
          <StyledP>{t("heroSection.subTitle")}</StyledP>
          <StyledButtomBox>
            <Button variant="contained" onClick={handleContainedButton}>
              {t("heroSection.primaryBtn")}
            </Button>
            <Button variant="outlined" onClick={handleOutlinedButton}>
              {t("heroSection.secoundaryBtn")}
            </Button>
          </StyledButtomBox>
        </StyledContentBox>
        <StyledIcon src={investment_img} alt="investment image" />
      </StyledArticle>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  margin-top: 50px;
  max-width: 1366px;
  padding: 100px 40px;
  margin: 0 auto;

  overflow: hidden;
  position: relative;

  @media screen and (max-width: ${({ theme }) => theme.resolutions.desktop}) {
    padding: 160px 40px;
  }
`;
const StyledArticle = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: ${({ theme }) => theme.resolutions.desktop}) {
    justify-content: center;
  }
`;
const StyledContentBox = styled.div`
  z-index: 100;

  @media screen and (max-width: ${({ theme }) => theme.resolutions.desktop}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const StyledIcon = styled.img`
  height: 550px;

  @media screen and (max-width: ${({ theme }) => theme.resolutions.desktop}) {
    position: absolute;
    opacity: 0.1;
    height: 650px;
  }
`;
const StyledH1 = styled.h1`
  ${({ theme }) => theme.fonts.headers.h1};
  color: ${({ theme }) => theme.colors.primary[700]};
  margin-bottom: 40px;
  max-width: 15ch;

  @media screen and (max-width: ${({ theme }) => theme.resolutions.mobile}) {
    ${({ theme }) => theme.fonts.headers.h2};
    margin-bottom: 20px;
  }
  @media screen and (max-width: ${({ theme }) => theme.resolutions.desktop}) {
    text-align: center;
  }
`;
const StyledP = styled.p`
  ${({ theme }) => theme.fonts.subTitle.default};
  color: ${({ theme }) => theme.colors.primary[700]};
  margin-bottom: 60px;
  max-width: 550px;

  @media screen and (max-width: ${({ theme }) => theme.resolutions.mobile}) {
    ${({ theme }) => theme.fonts.subTitle.small};
  }
  @media screen and (max-width: ${({ theme }) => theme.resolutions.desktop}) {
    text-align: center;
  }
`;
const StyledButtomBox = styled.div`
  max-width: 245px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
