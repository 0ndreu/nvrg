/**
 * Created by lesha on 08.10.2017.
 */


import React from 'react';
import {Grid, Row, Col,Glyphicon} from 'react-bootstrap'
import {Link} from 'react-router-dom';
class Footer extends React.Component {

    constructor(props) {
        super(props);
    }


    render = () => {

        return (
            <div className="footer_placeholder">
                <Grid fluid>
                    <Row className="centered">
                        <Col sm={12}>
                            <ol className="soc_icn">
                            {/*<h3>*/}
                                <a href="https://vk.com/nauka_v_regiony"> <i className="fa fa-vk fa-2x" aria-hidden="true"></i> </a>
                                <a href="mailto:yuliya@naukavregiony.com"> <i className="fa fa-envelope fa-2x" aria-hidden="true"></i> </a>
                                <a href="https://www.youtube.com/channel/UCWyqrBRPgT33TUtbMQsyHqw"> <i className="fa fa-youtube-play fa-2x" aria-hidden="false"></i> </a>
                            </ol>
                        </Col>
                        <br/>
                        <Col sm={12}>
                            <h4>© Фонд развития Физтех-школ. Все права защищены.</h4>
                        </Col>

                    </Row>
                </Grid>
            </div>
        )
    }

}


export default Footer