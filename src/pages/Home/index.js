import React from "react";
import styled from "styled-components";
import HeroSection from "./hero.section";

const StyledContainer = styled.main`
  margin-top: 50px;
`;

export default function Home() {
  return (
    <StyledContainer>
      <HeroSection />
    </StyledContainer>
  );
}
