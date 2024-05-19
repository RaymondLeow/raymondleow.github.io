import React, {useEffect} from 'react';
import './App.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import ReactFullpage from '@fullpage/react-fullpage';


import "tailwindcss/dist/base.css";
import "./treact/styles/globalStyles.css";


import FirstPage from "./treact/components/hero/FirstPage.js";
import SecondPage from "./treact/components/hero/SecondPage.js";
import ThirdPage from "./treact/components/features/ThirdPage.js";
import FourthPage from "./treact/components/hero/FourthPage.js";
import ComponentRenderer from "./treact/ComponentRenderer.js";
import { BrowserRouter as Router, HashRouter, Routes, Route, Link, useNavigate, useLocation } from "react-router-dom";
import StartPage from './treact/StartPage.js';


Amplify.configure(awsconfig);

const anchors = ['hello', 'who_am_i', 'experience', 'contact'];
const FullpageWrapper = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace('#/', '');
    console.log("Current hash:", hash);
    if (anchors.includes(hash) && window.fullpage_api) {
      console.log("Navigating within Fullpage:", hash);
      window.fullpage_api.moveTo(hash);
    }
  }, [location]);

  const handleLeave = (origin, destination) => {
    const nextAnchor = anchors[destination.index];
    console.log("Leaving section:", origin.anchor, "to:", nextAnchor);
    navigate(`/#${nextAnchor}`);
  };

 return (
    <ReactFullpage
    anchors={anchors}
      navigation
      onLeave={handleLeave}
      render={({ fullpageApi }) => {
        window.fullpage_api = fullpageApi;
        return (
          <ReactFullpage.Wrapper>
            <Routes>
              <Route path="/" element={<StartPage />} />
              <Route path="/:name" element={<ComponentRenderer />} />
            </Routes>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}

const App = () => (
  <HashRouter>
    <Routes>
      <Route path="/*" element={<FullpageWrapper />} />
    </Routes>
  </HashRouter>
);

export default App;