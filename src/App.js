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
import { BrowserRouter as Router, HashRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import StartPage from './treact/StartPage.js';


Amplify.configure(awsconfig);
const anchors = ["hello", "who_am_i", "experience", "contact"];

const Fullpage = ({fullpageApi}) => {
  const navigate = useNavigate();


  return (<ReactFullpage
    //fullpage options
    licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {1000}
    anchors={anchors}
    autoScrolling={false}
    fitToSection={false}
    navigation
    navigationTooltips={anchors}
    onLeave={(origin, destination) => {
      const nextAnchor = anchors[destination.index];
      navigate(`/${nextAnchor}`);
    }}

    render={({ state }) => {
      return (
        <ReactFullpage.Wrapper>
          <Routes>
            <Route path="/" element={<StartPage fullpageApi={fullpageApi}/>}/>
            <Route path="/:name" element={<ComponentRenderer/>}/>
          </Routes>
        </ReactFullpage.Wrapper>
      )
          {/* <Router basename={process.env.PUBLIC_URL}>
              <Routes> */}
                {/*<Route path="/components/:type/:subtype/:name">
                  <ComponentRenderer />
                </Route>
                <Route path="/components/:type/:name">
                  <ComponentRenderer />
                </Route>*/}
                {/* <Route path="/:name" component={ComponentRenderer}/> */}
                  {/*<ComponentRenderer />
                </Route>*/}
                {/* <Route path="/">
                  <div className="section">
                    <FirstPage api={fullpageApi}/> */}
                    {/*<InnerPages/>*/}
                 {/*  </div>
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
              </Routes>
            </Router> */}
    }}
  />)
}

  {/* <HashRouter basename='/'>
  <Routes>
    <Route exact path="/" element={<StartPage/>}></Route>
    <Route path="/about" element={<ComponentRenderer/>}></Route>
    <Route path="/portfolio" element={<ComponentRenderer/>}></Route>
  </Routes>
  </HashRouter> */}
  const App = () => (
    <HashRouter>
      <Routes>
        <Route path="/*" element={<Fullpage />} />
      </Routes>
    </HashRouter>
  );

export default App;