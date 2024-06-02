import React from "react";
import tw from "twin.macro";
import GlobalStyles from "styles/GlobalStyles";
import { css } from "styled-components/macro"; //eslint-disable-line

import { HashRouter, Routes, Route } from "react-router-dom";
import StartPage from "./StartPage.js";
import About from "./components/innerpages/About.js";
import Portfolio from "./components/innerpages/Portfolio.js";
import Navigation from "components/headers/navigation.js";
import HeaderBase from "components/headers/light.js";
const Header = tw(HeaderBase)`max-w-none`;

const App = () => {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<StartPage />} />
      <Route exact path="/" element={<StartPage />} />
      <Route path="/*" element={<StartPage />} />
    </Routes>
  );
};

const Root = () => (
  <>
    <GlobalStyles />
    <Header />
    <HashRouter>
      <App />
    </HashRouter>
  </>
);

export default Root;
