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

        // let CustomComponent = (children) => {
        //     return(
        //         <li className="list-group-item" onClick={() => {}}>
        //         {children}
        //         </li>);
        // };

        return (
            <div className="abpagewr">
                <Proj/>
                {/*<hr/>*/}
                {/*<div className="bk_start">*/}
                    {/*<h1 id="nomargin" className={'centered default_wrapper bk_1'}>Деятельность в рамках проекта</h1>*/}
                {/*</div>*/}
                    <Deyatelnost/>



                <div style={{'marginTop': '-10px'}} className="bk_start2">
                {/*<Deyatelnost/>*/}
                </div>

                {/*<br/>*/}
                <div style={{marginTop: '22px', marginBottom: '15px'}}>
                    <Grid>
                        <div className="embed-responsive embed-responsive-16by9">
                            <YouTube
                                videoId="ttZP-A7q2S0"
                                // opts={opts}
                                onReady={this._onReady}
                            />
                        </div>
                    </Grid>
                    <br/>
                </div>


                {/*<div style={{marginTop: '22px', marginBottom: '15px'}}>*/}
                    {/*<Grid>*/}
                        {/*<div className="embed-responsive embed-responsive-16by9">*/}
                            {/*<iframe title="video" className="embed-responsive-item" src="https://www.youtube.com/embed/ttZP-A7q2S0?rel=0" frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen/>*/}
                        {/*</div>*/}

                    {/*</Grid>*/}
                    {/*<br/>*/}
                {/*</div>*/}
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

//AboutPage = connect(mapStateToProps, mapDispatchToProps)(AboutPage)

export default AboutPage