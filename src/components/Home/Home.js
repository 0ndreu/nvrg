import React from 'react';
import ParallaxJumbotron from "./ParallaxJumbotron";
import AboutPage from "../AboutPage/AboutPage";

class Home extends React.Component {


    render = () => {
        return (
            <div style={{textAlign: 'center'}}>
                <ParallaxJumbotron/>
                <br/>
                <AboutPage/>
            </div>
        )
    }

}

export default Home