/**
 * Created by lesha on 19.12.2017.
 */
import React from 'react';
// import {} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import { Grid, Row, Col, Clearfix} from 'react-bootstrap';
import { Parallax } from 'react-parallax';
import Button from '../Page/Elems/Button';

//import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';

class ParallaxJumbotron extends React.Component {

    static defaultProps = {

    }

    static propTypes = {

    }

    state = {

    }

    //ES5 - componentWillMount
    // constructor(props) {
    //     super(props);
    // }

    componentDidMount(){

    }

    componentWillReceiveProps(){

    }

    render = () => {

        return (
            <Grid fluid>
                <Row>

                    <Parallax className={'par_img'}
                              bgImage={'./assets/img/photo.jpg'}
                              strength={90}

                    >
                        <Clearfix visibleSmBlock visibleMdBlock visibleLgBlock>
                            <Col sm = {5} smOffset={7} className = {'parallax-img-md'}>
                                <div className="text-wrapper">
                                    <h3>Наука в регионы</h3>
                                    <h5>Образовательный проект по созданию национальной системы подготовки и развития талантливых школьников</h5>
                                    <Link to="/application">
                                        <Button Caption="Подать заявку"></Button>
                                    </Link>
                                </div>
                            </Col>
                        </Clearfix>
                        <Clearfix visibleXsBlock>
                            <Col xs={12} className = {'parallax-img-xs text-wrapper'} style={{color: 'white'}}>
                                <div className="text-wrapper">
                                    <h3>Наука в регионы</h3>
                                    <h5>Образовательный проект по созданию национальной системы подготовки и развития талантливых школьников</h5>
                                    <Link to="/application"> {/*//!fixit*/}
                                    <Button Caption="Подать заявку"></Button>
                                    </Link>
                                </div>
                            </Col>
                        </Clearfix>
                    </Parallax>

                </Row>
            </Grid>
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

//ParallaxJumbotron = connect(mapStateToProps, mapDispatchToProps)(ParallaxJumbotron)

export default ParallaxJumbotron