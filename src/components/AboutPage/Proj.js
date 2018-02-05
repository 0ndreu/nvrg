/**
 * Created by lesha on 25.01.2018.
 */
import React from 'react';
import {Grid, Row, Col, Image} from 'react-bootstrap';
import {Link} from 'react-router-dom';

//import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';

class Proj extends React.Component {

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
            <Grid >
            {/*<div className="projectwrapper"*/}
                 {/*style={{*/}

                 {/*}}*/}
            {/*>*/}

                <Row style={{

                }}>

                        <Col md={12}>
                            {/*<div className="default_wrapper">*/}
                                <h1 className={'centered'}>О проекте</h1>
                            {/*</div>*/}
                        </Col>
                </Row>
                <Row>
                        <Col  md={12}>
                            <div className="default_wrapper">
                                <p>Проект «Наука в регионы» – научно-образовательный проект, нацеленный на повышение уровня знаний и интереса школьников 8-10 классов к естественнонаучным и техническим дисциплинам путем проведения для учеников и учителей из региональных школ очных образовательных смен Фондом развития Физтех-школ на базе МФТИ и организации в регионах центров дополнительного образования – кружков по следующим профилям:</p>
                            </div>
                        </Col>
                </Row>
                <Row>
                        <Grid>
                            <Col sm ={4}>
                                <div className="centered big_wrapper">
                                <Image alt="75x75" src="./assets/img/math.png"/> + <Image src="./assets/img/ph.png"/>
                                    <br/>
                                    <h4>Математика + Физика</h4>
                                </div>
                            </Col>

                            <Col sm ={4}>
                                <div className="centered big_wrapper">
                                <Image alt="75x75" src="./assets/img/math.png"/> + <Image src="./assets/img/inf.png"/>
                                    <br/>
                                    <h4>Математика + Информатика</h4>
                                </div>
                            </Col>

                            <Col sm ={4}>
                                <div className="centered big_wrapper" >
                                <Image alt="75x75" src="./assets/img/chem.png"/> + <Image src="./assets/img/bio.png"/>
                                    <br/>
                                    <h4>Химия + Биология</h4>
                                </div>
                            </Col>
                        </Grid>
                </Row>



                    {/*<Col mdOffset={5} md={4}>*/}
                        {/*<p> -математика-физика;</p>*/}
                        {/*<p> -математика-информатика;</p>*/}
                        {/*<p> -химия-биология.</p>*/}
                    {/*</Col>*/}
            {/* </div>*/}
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

//Proj = connect(mapStateToProps, mapDispatchToProps)(Proj)

export default Proj