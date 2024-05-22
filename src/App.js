import React from "react";
import GlobalStyles from "styles/GlobalStyles";
import { css } from "styled-components/macro"; //eslint-disable-line

import { HashRouter, Routes, Route } from "react-router-dom";
import StartPage from "./StartPage.js";
import About from "./components/innerpages/About.js";
import Portfolio from "./components/innerpages/Portfolio.js";

const App = () => (
  <>
    <GlobalStyles />
    <HashRouter>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/*" element={<StartPage />} />
      </Routes>
    </HashRouter>
  </>
);

export default App;
