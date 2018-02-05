/**
 * Created by lesha on 02.01.2018.
 */
import React from 'react';
import {Grid, FormGroup,FormControl, Col, Form, InputGroup, Radio} from 'react-bootstrap';
import AppForm from './AppForm'
// import {Link} from 'react-router-dom';

//import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';

class Application extends React.Component {

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
        let Height = window.innerHeight+74+90 + 'px';
        // alert(Height)
        return (
            <div className="application_wrapper">
                <Grid fluid style={{padding: '0px', margin: '0px'}}>
                    {/*<AppForm/>*/}
                    <iframe title="application" className="iframe"  src="https://docs.google.com/forms/d/e/1FAIpQLSfDzGkb-OUk0_MhFW1q4qwV_1t-l_uVIuuUKih5K3ccYMqw3A/viewform?embedded=true"  frameBorder="0" marginHeight="0" marginWidth="0">Загрузка...</iframe>
                </Grid>
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

//Application = connect(mapStateToProps, mapDispatchToProps)(Application)

export default Application