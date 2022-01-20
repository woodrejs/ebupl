import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { offersData } from "../../utils/offers.data";
import { useTranslation } from "react-i18next";

export default function Offer() {
  const params = useParams();
  const { t } = useTranslation();

  const list = t(`offer.${params.name}.list`)?.split("+");
  const data = offersData.find((offer) => offer.name === params.name);

  return (
    <StyledContainer>
      <StyledBanner>
        <StyledBannerBox>
          <StyledH1>{t(`offer.${params.name}.title`)}</StyledH1>
          <StyledImage src={data.src} alt="img" />
        </StyledBannerBox>
      </StyledBanner>

      <StyledContentBox>
        <StyledP>{t(`offer.${params.name}.text`)}</StyledP>
        <StyledList>
          {list.map((item, index) => (
            <StyledListItem key={index}>{item}</StyledListItem>
          ))}
        </StyledList>
      </StyledContentBox>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  flex: 1;
  position: relative;
`;
const StyledBanner = styled.div`
  background-color: ${({ theme }) => theme.colors.primary[300]};
  width: 100%;
  height: 460px;
  padding-top: 50px;
`;
const StyledBannerBox = styled.div`
  max-width: 1366px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  position: relative;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;
const StyledContentBox = styled.div`
  max-width: 1366px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  position: relative;

  display: flex;
  flex-direction: column;
  padding: 80px 40px;
`;
const StyledH1 = styled.h1`
  ${({ theme }) => theme.fonts.headers.h1};
  color: ${({ theme }) => theme.colors.primary[700]};
  z-index: 100;
  text-align: center;

  @media screen and (max-width: ${({ theme }) => theme.resolutions.mobile}) {
    ${({ theme }) => theme.fonts.headers.h2};
  }
`;
const StyledImage = styled.img`
  height: 1000px;
  position: absolute;
  opacity: 0.1;
`;
const StyledP = styled.p`
  ${({ theme }) => theme.fonts.body.default};
  color: ${({ theme }) => theme.colors.dark[500]};
  margin-bottom: 50px;

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

  @media screen and (max-width: ${({ theme }) => theme.resolutions.mobile}) {
    ${({ theme }) => theme.fonts.body.small};
  }
`;
