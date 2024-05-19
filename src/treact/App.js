import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";


import ComponentRenderer from "ComponentRenderer.js";
import MainLandingPage from "MainLandingPage.js";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/components/:type/:subtype/:name">
          <ComponentRenderer />
        </Route>
        <Route path="/components/:type/:name">
          <ComponentRenderer />
        </Route>
        <Route path="/">
          // <MainLandingPage />
        </Route>
      </Switch>
    </Router>
  );
}