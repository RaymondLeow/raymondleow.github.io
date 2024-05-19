import React from 'react';
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
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


Amplify.configure(awsconfig);
const anchors = ["hello", "who_am_i", "experience", "contact"];
const Fullpage = () => (
  <ReactFullpage
    //fullpage options
    licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {1000}
    anchors={anchors}
    autoScrolling={false}
    fitToSection={false}
    navigation
    navigationTooltips={anchors}

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
            <Router>
              <Switch>
                {/*<Route path="/components/:type/:subtype/:name">
                  <ComponentRenderer />
                </Route>
                <Route path="/components/:type/:name">
                  <ComponentRenderer />
                </Route>*/}
                <Route path="/:name">
                  <ComponentRenderer />
                </Route>
                <Route path="/">
                  <div className="section">
                    <FirstPage api={fullpageApi}/>
                    {/*<InnerPages/>*/}
                  </div>
                  <div className="section">
                    <SecondPage/>
                  </div>
                  <div className="section">
                    <ThirdPage />
                  </div>
                  <div className="section">
                    <FourthPage />
                  </div>
               </Route>
              </Switch>
            </Router>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);


export default Fullpage;