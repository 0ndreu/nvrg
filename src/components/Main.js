import React, {PropTypes} from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Home/Home'
import Professors from './Programm/Professors'
import Culture from './Programm/Culture'
import Help from './Help/Help'
import AboutPage from './AboutPage/AboutPage'
import Application from './Application/Application'
import Management from './AboutPage/Management'
import MethMaterials from './Methodical/MethMaterials'
import Schedule from './Schedule/Schedule'
import Google_verification from './Google_verification'


// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';


class Main extends React.Component {

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

    componentDidUpdate() {
        window.scrollTo(0,0);
    }

// <Link to="/1">1</Link>
// <Link to="/2">2</Link>

    render = () => {

        return (
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/about_project' component={AboutPage}/>
                    <Route exact path='/management' component={Management}/>
                    <Route exact path='/professors' component={Professors}/>
                    <Route exact path='/cultural_program' component={Culture}/>
                    <Route exact path='/methodical_materials' component={MethMaterials}/>
                    <Route exact path='/application' component={Application}/>
                    <Route exact path='/schedule' component={Schedule}/>
                    {/*<Route exact path='/googlecb1dbc0c329763f2.html' component={Google_verification}/>*/}
                    {/**/}
                    {/*<Route path='/feedback' component={Feedback}/>*/}
                    <Route path='/help' component={Help}/>
                    {/*<Route path='/calc' component={Calc}/>*/}
                </Switch>
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

//Main = connect(mapStateToProps, mapDispatchToProps)(Main)

export default Main