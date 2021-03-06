import React, { useEffect } from "react";
import styled from "styled-components";
import HeroSection from "./hero.section";
import AboutSection from "./about.section";
import OfferSection from "./offer.section";
import QuestionSection from "./question.section";
import TestimonialSection from "./testimonial.section";
import ContactSection from "./contact.section";
import { scroller } from "react-scroll";
import { useSelector } from "react-redux";

const StyledContainer = styled.main`
  margin-top: 50px;
`;

export default function Home() {
  const page = useSelector(({ navSlice }) => navSlice.page);

  useEffect(() => {
    switch (page) {
      case "/":
        scroller.scrollTo("heroSection", { smooth: true, offset: -50 });
        break;
      case "/about":
        scroller.scrollTo("aboutSection", { smooth: true, offset: -50 });
        break;
      case "/contact":
        scroller.scrollTo("contactSection", { smooth: true, offset: -50 });
        break;
      case "/offers":
        scroller.scrollTo("offerSection", { smooth: true, offset: -50 });
        break;
    }
  }, [page]);
  return (
    <StyledContainer>
      <HeroSection />
      <AboutSection />
      <OfferSection />
      <QuestionSection />
      <TestimonialSection />
      <ContactSection />
    </StyledContainer>
  );
}
