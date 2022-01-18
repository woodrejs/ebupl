import React from "react";
import styled from "styled-components";
import startup_img from "../../assets/icons/startup_img.svg";

export default function TestimonialSection() {
  return (
    <StyledSection>
      <StyledArticle>
        <StyledIcon src={startup_img} alt="startup image" />
        <div>
          <StyledH1>
            Pomogliśmy już <br />
            wielu firmom
          </StyledH1>
          <StyledP>
            Jesteśmy po to żeby wspierać Państwa firmę na terenie Unii Europejskiej, a
            głównie w Polsce. Jesteśmy w stanie odpowiedzieć na każde pytania i
            przedstawić rozwiązania które będzie odpowiadać twoim zapotrzebowaniem.
          </StyledP>
        </div>
      </StyledArticle>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  max-width: 1366px;
  padding: 120px 40px;
  margin: 0 auto;
`;
const StyledArticle = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StyledIcon = styled.img`
  height: 550px;
`;
const StyledH1 = styled.h1`
  ${({ theme }) => theme.fonts.headers.h1};
  color: ${({ theme }) => theme.colors.primary[700]};
  margin-bottom: 40px;
`;
const StyledP = styled.p`
  ${({ theme }) => theme.fonts.subTitle.default};
  color: ${({ theme }) => theme.colors.primary[700]};
  margin-bottom: 60px;
  max-width: 550px;
`;
