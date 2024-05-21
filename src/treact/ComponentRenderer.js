import React from "react";
import { useParams } from "react-router-dom";
import Portfolio from "./components/innerpages/Portfolio.js";
import About from "./components/innerpages/About.js";

export const components = {
  innerPages: {
    portfolio: {
      name: "Portfolio",
      component: Portfolio,
      url: "/portfolio",
    },
    about: {
      name: "About",
      component: About,
      url: "/about",
      redirectUri:
        "https://8qqhkj14af.execute-api.eu-central-1.amazonaws.com/dev/items",
    },
  },
};

export default () => {
  const name = useParams();
  console.log("ComponentRenderer params:", name);

  try {
    let item = components["innerPages"][name];
    let Component = item.component;

    if (Component) console.log("Rendering component:", name);
    return <Component />;
  } catch (e) {
    console.log("Rendering default component: About");
    return <About />;
  }
};
