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


class Main extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidUpdate() {
        window.scrollTo(0,0);
    }


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
                    <Route path='/help' component={Help}/>
                </Switch>
        )
    }

}


export default Main