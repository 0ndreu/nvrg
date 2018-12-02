/**
 * Created by lesha on 08.10.2017.
 */
import React from 'react';
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';
import Button from './Elems/Button';
import ButtonBlack from './Elems/ButtonBlack';

const ltext = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consectetur consequuntur dolores eaque expedita facere harum maxime necessitatibus, odit pariatur perferendis tempore temporibus voluptate? Aliquid distinctio nemo nobis nostrum odio.'

class Steps extends React.Component {

    render = () => {
        return (
                <div className="grid_placeholder1">

                    <h1>Как это работает?</h1>
                    <Grid>
                        <Row className="show-grid headrow">
                            <Col className = "headcol" sm={4}>
                                <h2>Шаг 1</h2>

                                <h4> {ltext} </h4>
                            </Col>


                            <Col className = "headcol mid_col" sm={4}>
                                <h2> Шаг 2 </h2>

                                <h4> {ltext} </h4>
                                <ButtonBlack>Подробнее</ButtonBlack>
                            </Col>


                            <Col className = "headcol" sm={4}>
                                <h2> Шаг 3 </h2>

                                <h4> {ltext} </h4>
                            </Col>
                        </Row>
                    </Grid>
                </div>
        )
    }

}

export default Steps