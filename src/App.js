import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Page404 from "./pages/404";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <NavigationBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offer" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/contact" element={<Home />} />
          {/* <Route path="/offer" element={<Offer />} /> */}
          <Route path="/*" element={<Page404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
