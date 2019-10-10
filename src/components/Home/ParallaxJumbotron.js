/**
 * Created by lesha on 19.12.2017.
 */
import React from 'react';
import {Link} from 'react-router-dom';
import { Grid, Row, Col, Clearfix} from 'react-bootstrap';
import { Parallax } from 'react-parallax';
import Button from '../Page/Elems/Button';


class ParallaxJumbotron extends React.Component {

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


export default ParallaxJumbotron