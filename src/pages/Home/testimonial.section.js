import React from "react";
import styled from "styled-components";
import startup_img from "../../assets/icons/startup_img.svg";

export default function TestimonialSection() {
  return (
    <StyledSection>
      <StyledArticle>
        <StyledIcon src={startup_img} alt="startup image" />
        <StyledContentBox>
          <StyledH1>
            Pomogliśmy już <br />
            wielu firmom
          </StyledH1>
          <StyledP>
            Jesteśmy po to żeby wspierać Państwa firmę na terenie Unii Europejskiej, a
            głównie w Polsce. Jesteśmy w stanie odpowiedzieć na każde pytania i
            przedstawić rozwiązania które będzie odpowiadać twoim zapotrzebowaniem.
          </StyledP>
        </StyledContentBox>
      </StyledArticle>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  max-width: 1366px;
  padding: 120px 40px;
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
    ${({ theme }) => theme.fonts.body.small};

    margin-bottom: 20px;
  }
  @media screen and (max-width: ${({ theme }) => theme.resolutions.desktop}) {
    text-align: center;
  }
`;
