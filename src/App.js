import React, { Component } from 'react';
import NavBar from './components/Page/HeaderBar'
import { HashRouter} from 'react-router-dom'
import Main from './components/Main'
import Footer from "./components/Page/Footer";

import './assets/font-awesome/css/font-awesome.css';
import './App.css';
import './assets/bootstrap/css/bootstrap.min.css';


//const auth = new Auth();


class App extends Component {
    render() {
        const App = (
            <div className="pageWrapper">
                <NavBar/>
                <div className="body">
                    <Main />
                </div>
                <Footer/>
            </div>);

        return (
        <HashRouter baseHref>
            {App}
        </HashRouter>
    );
  }
}

export default App;
