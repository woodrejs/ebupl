import React from "react";
import styled from "styled-components";
import HeroSection from "./hero.section";
import AboutSection from "./about.section";
import OfferSection from "./offer.section";
import QuestionSection from "./question.section";
import TestimonialSection from "./testimonial.section";

const StyledContainer = styled.main`
  margin-top: 50px;
`;

export default function Home() {
  return (
    <StyledContainer>
      <HeroSection />
      <AboutSection />
      <OfferSection />
      <QuestionSection />
      <TestimonialSection />
    </StyledContainer>
  );
}
