import React, {PropTypes} from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Home/Home'
import Professors from './Programm/Professors'
import Management from './AboutPage/Management'
import MethMaterials from './Methodical/MethMaterials'
import Classes from './MIPTClasses/Classes'
import Botalka from './Botalka/Botalka';

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
                    <Route exact path='/management' component={Management}/>
                    <Route exact path='/professors' component={Professors}/>
                    <Route exact path='/methodical_materials' component={MethMaterials}/>
                    <Route exact path='/classes' component={Classes}/>
                    <Route exact path='/botalka' component={Botalka}/>
                </Switch>
        )
    }

}


export default Main