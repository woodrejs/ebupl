import React from "react";
import styled from "styled-components";
import investment_img from "../../assets/icons/Investment.svg";
import Button from "@mui/material/Button";

export default function HeroSection() {
  return (
    <StyledSection>
      <StyledArticle>
        <div>
          <StyledH1>
            Rzetelność
            <br />
            profesjonalizm
            <br />
            doświadczenie
          </StyledH1>
          <StyledP>
            Działamy w pełnych obszarach jednak jesteśmy nastawienie na indywidualne
            potrzeby każdego Klienta.
          </StyledP>
          <StyledButtomBox>
            <Button variant="contained">Nasza oferta</Button>
            <Button variant="outlined">kontakt</Button>
          </StyledButtomBox>
        </div>
        <StyledIcon src={investment_img} alt="investment_img" />
      </StyledArticle>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  margin-top: 50px;
  max-width: 1366px;
  padding: 100px 40px;
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
const StyledButtomBox = styled.div`
  max-width: 245px;
  display: flex;
  justify-content: space-between;
`;
const StyledP = styled.p`
  ${({ theme }) => theme.fonts.body.default};
  color: ${({ theme }) => theme.colors.primary[700]};
  margin-bottom: 60px;
  max-width: 550px;
`;
