import FirstPage from "./components/hero/FirstPage";
import SecondPage from "./components/hero/SecondPage";
import ThirdPage from "./components/features/ThirdPage";
import FourthPage from "./components/hero/FourthPage";
import React from "react";

class StartPage extends React.Component {
    render() {
        return (
            <>
            <div className="section">
                <FirstPage {...this.props}/>
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
            </>
        )
    }
}

export default StartPage;