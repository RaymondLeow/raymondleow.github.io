import React, { useEffect } from "react";
import GlobalStyles from "styles/GlobalStyles";
import { css } from "styled-components/macro"; //eslint-disable-line

import {
  HashRouter,
  Routes,
  Route,
  useLocation,
  useHistory,
  useNavigate,
} from "react-router-dom";
import StartPage from "./StartPage.js";
import About from "./components/innerpages/About.js";
import Portfolio from "./components/innerpages/Portfolio.js";

const App = () => {
  /* const anchors = ["hello", "who_am_i", "experience", "contact"];
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (anchors.includes(location.pathname)) {
      navigate("/");
    }
  }, [location]); */

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
    <HashRouter>
      <App />
    </HashRouter>
  </>
);

export default Root;
