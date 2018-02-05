/**
 * Created by lesha on 02.01.2018.
 */
import React from 'react';
import {Grid, Thumbnail, Row, Col, Image, Tabs, Tab, Button, ButtonGroup} from 'react-bootstrap';
import {Link, HashRouter,NavLink} from 'react-router-dom';
// import {history} from 'react-router-dom/BrowserRouter'
// import Professors from './Professors'
// import Culture from './Culture'
//import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';

class Programm extends React.Component {

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
                <Professors/>
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

//Programm = connect(mapStateToProps, mapDispatchToProps)(Programm)

export default Programm