import React from "react";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import IconCard from "../../components/IconCard";
import { v4 as uuidv4 } from "uuid";

import investment_img from "../../assets/icons/investment_img.svg";
import support_img from "../../assets/icons/support_img.svg";
import team_img from "../../assets/icons/team_img.svg";
import accounting_img from "../../assets/icons/accounting_img.svg";
import assistant_img from "../../assets/icons/assistant_img.svg";
import education_img from "../../assets/icons/education_img.svg";
import tutorials_img from "../../assets/icons/tutorials_img.svg";
import portfolio_img from "../../assets/icons/portfolio_img.svg";

const cards = [
  {
    id: uuidv4(),
    name: "Usługi rejestracyjne Twojej firmy i wsparcie pecjalistów",
    src: support_img,
    alt: "support image",
  },
  {
    id: uuidv4(),
    name: "Prowadzenia biura wirtualnego",
    src: team_img,
    alt: "team image",
  },
  {
    id: uuidv4(),
    name: "Usługi księgowe",
    src: accounting_img,
    alt: "accounting image",
  },
  {
    id: uuidv4(),
    name: "Usługa -  “Konsjerż”",
    src: assistant_img,
    alt: "assistant image",
  },
  {
    id: uuidv4(),
    name: "Obsługa prawna przedsiębiorstw",
    src: education_img,
    alt: "education image",
  },
  {
    id: uuidv4(),
    name: "Wywiad gospodarczy nowych podmiotów/kontrahentów",
    src: tutorials_img,
    alt: "tutorials image",
  },
  {
    id: uuidv4(),
    name: "Skuteczna windykacja",
    src: portfolio_img,
    alt: "portfolio image",
  },
  {
    id: uuidv4(),
    name: "Inwestycje",
    src: investment_img,
    alt: "investment image",
  },
];

export default function OfferSection() {
  return (
    <StyledSection className="offerSection">
      <StyledArticle>
        <StyledContentBox>
          <StyledH1>W czym możemy Ci pomóc</StyledH1>
          <StyledP>
            Wiemy jak to jest zaczynać od początku i bez odpowiedniej wiedzy, lub jak
            reagować kiedy kryzys próbuje decydować za Ciebie. Jesteśmy po to żeby
            wspierać Państwa firmę na terenie Unii Europejskiej, a głównie w Polsce.
          </StyledP>
        </StyledContentBox>
        <StyledIconsBox>
          <Grid container spacing={2} rowSpacing={10}>
            {cards.map(({ id, src, name, alt }) => (
              <IconCard key={id} src={src} alt={alt} title={name} />
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
