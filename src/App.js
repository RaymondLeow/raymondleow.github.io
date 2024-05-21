import React from "react";
import "./App.css";

import "tailwindcss/dist/base.css";
import "./treact/styles/globalStyles.css";

import { HashRouter, Routes, Route } from "react-router-dom";
import StartPage from "./treact/StartPage.js";
import About from "./treact/components/innerpages/About.js";
import Portfolio from "./treact/components/innerpages/Portfolio.js";

const App = () => (
  <HashRouter>
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/*" element={<StartPage />} />
    </Routes>
  </HashRouter>
);

export default App;
