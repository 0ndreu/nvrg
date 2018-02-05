/**
 * Created by lesha on 24.10.2017.
 */
import React from 'react';
import {Jumbotron, Carousel} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Button from './Elems/Button'

//import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';

class MainBanner extends React.Component {

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
            <div id="headerwrap">
                <h1>MainBanner</h1>
                <h2>sometext</h2>

                <Link to="/calc">
                    <Button Caption="Создать заказ"/>
                </Link>

                    {/*<Carousel/>*/}
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

//MainBanner = connect(mapStateToProps, mapDispatchToProps)(Jumbo)

export default MainBanner