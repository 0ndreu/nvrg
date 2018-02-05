import React from 'react';
import { Switch, Route, Link} from 'react-router-dom'
// import MainBanner from '../Page/MainBanner'
// import Steps from '../Page/Steps'
import Footer from "../Page/Footer";



// import ButtonBlack from './coElems/ButtonBlack';
import Button from '../Page/Elems/Button';

import { Grid, Row, Col, Clearfix} from 'react-bootstrap';
import { Parallax } from 'react-parallax';


import ParallaxJumbotron from "./ParallaxJumbotron";
import AboutPage from "../AboutPage/AboutPage";
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

class Home extends React.Component {

    static defaultProps = {

    }

    static propTypes = {

    }

    state = {

    }

    //ES5 - componentWillMount
    constructor(props) {
        super(props);
    }

    componentDidMount(){

    }

    componentWillReceiveProps(){

    }

    render = () => {
        return (
            <div style={{textAlign: 'center'}}>
                <ParallaxJumbotron/>
                <br/>
                <AboutPage/>

                {/*its home!!!*/}
            </div>
        )
    }

}


//const mapStateToProps = (state) => {
//    return {
//        currentUserId: state.users.currentUserId,
//        loading: state.users.loading
//    }
//}

//const mapDispatchToProps = (dispatch) => {
//    return {
//        onLogout: (data) => {
//            dispatch(actions.logOut())
//        }
//    }
//}

//Home = connect(mapStateToProps, mapDispatchToProps)(Home)

export default Home