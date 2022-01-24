import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Page404 from "./pages/404";
import NavigationBar from "./components/NavigationBar";
import MessangerChat from "./components/MessangerChat";
import Footer from "./components/Footer";
import styled from "styled-components";

export default function App() {
  return (
    <StyledContainer>
      <BrowserRouter>
        <NavigationBar />
        <MessangerChat />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offers" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/contact" element={<Home />} />
          <Route path="/offer/:name" element={<Offer />} />
          <Route path="/*" element={<Page404 />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </StyledContainer>
  );
}
const StyledContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
