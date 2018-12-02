/**
 * Created by lesha on 19.12.2017.
 */
import React from 'react';
import {Grid, Glyphicon, ListGroup, ListGroupItem, Jumbotron, Button} from 'react-bootstrap';
import Proj from './Proj';
import Deyatelnost from './Deyatelnost';
import YouTube from 'react-youtube';

// import {Link} from 'react-router-dom';

//import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';

class AboutPage extends React.Component {

    render = () => {

        return (
            <div className="abpagewr">
                <Proj/>

                <Deyatelnost/>

                <div style={{marginTop: '22px', marginBottom: '15px'}}>
                    <Grid>
                        <div className="embed-responsive embed-responsive-16by9">
                            <YouTube
                                videoId="ttZP-A7q2S0"
                                onReady={this._onReady}
                            />
                        </div>
                    </Grid>
                    <br/>
                </div>
            </div>
        )
    }

}

export default AboutPage