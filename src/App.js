import React from "react";
import tw from "twin.macro";
import GlobalStyles from "styles/GlobalStyles";
import { css } from "styled-components/macro"; //eslint-disable-line

import { HashRouter, Routes, Route } from "react-router-dom";
import StartPage from "./StartPage.js";
import About from "./components/innerpages/About.js";
import Timeline from "./components/innerpages/Timeline.js";
import Navigation from "components/headers/navigation.js";
const Header = tw(Navigation)`max-w-none`;

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/contact" element={<StartPage />} />
      </Routes>
    </>
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
