import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";

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

export default function AboutSection() {
  return (
    <StyledSection className="aboutSection">
      <StyledArticle>
        <StyledContentBox>
          <StyledH1>o nas</StyledH1>
          <StyledP>
            Rzetelność, Profesjonalizm, Doświadczenia - tak, to My - Europa Business.
            Jednak, jak już wiemy za nazwą firmy i jej sloganem stoją ludzie. W danym
            przypadku trzy osoby które wskazują najlepszą swoją cechę. Wiemy jak to jest
            zaczynać od początku i bez odpowiedniej wiedzy, lub jak reagować kiedy kryzys
            próbuje decydować za Ciebie.
          </StyledP>
          <Button variant="contained">czytaj więcej</Button>
        </StyledContentBox>
      </StyledArticle>
    </StyledSection>
  );
}
