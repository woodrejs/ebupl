import React from "react";
import styled from "styled-components";
import investment_img from "../../assets/icons/investment_img.svg";
import Button from "@mui/material/Button";
import { scroller } from "react-scroll";
import { useDispatch } from "react-redux";
import { setPage } from "../../redux/nav.slice";

export default function HeroSection() {
  const dispatch = useDispatch();

  const handleContainedButton = () => {
    scroller.scrollTo("offerSection", { smooth: true });
    dispatch(setPage("/offer"));
  };
  const handleOutlinedButton = () => {
    scroller.scrollTo("questionSection", { smooth: true, offset: -120 });
    dispatch(setPage("/contact"));
  };

  return (
    <StyledSection className="heroSection">
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
            <Button variant="contained" onClick={handleContainedButton}>
              Nasza oferta
            </Button>

            <Button variant="outlined" onClick={handleOutlinedButton}>
              kontakt
            </Button>
          </StyledButtomBox>
        </div>
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
  ${({ theme }) => theme.fonts.subTitle.default};
  color: ${({ theme }) => theme.colors.primary[700]};
  margin-bottom: 60px;
  max-width: 550px;
`;
