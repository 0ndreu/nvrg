/**
 * Created by lesha on 19.12.2017.
 * Updated by Andrey on 10/10/2019
 */
import React from 'react';
import {Grid, Glyphicon, ListGroup, ListGroupItem, Jumbotron, Button} from 'react-bootstrap';
// import Proj from './Proj';

import History from './History'
import ForStudents from './ForStudents'

import Deyatelnost from './Deyatelnost';
import YouTube from 'react-youtube';

// import {Link} from 'react-router-dom';

//import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';

class AboutPage extends React.Component {

    render = () => {

        return (
            <div className="abpagewr">
                <ForStudents/>
            </div>
        )
    }

}

export default AboutPage