import React, { useEffect } from "react";
import GlobalStyles from "styles/GlobalStyles";
import { css } from "styled-components/macro"; //eslint-disable-line

import {
  HashRouter,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import StartPage from "./StartPage.js";
import About from "./components/innerpages/About.js";
import Portfolio from "./components/innerpages/Portfolio.js";

const App = () => {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<StartPage />} />
      <Route path="/*" element={<StartPage />} />
    </Routes>
  );
};

const Root = () => (
  <>
    <GlobalStyles />
    <HashRouter>
      <App />
    </HashRouter>
  </>
);

export default Root;
