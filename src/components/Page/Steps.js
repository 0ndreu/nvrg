/**
 * Created by lesha on 08.10.2017.
 */
import React from 'react';
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';
import Button from './Elems/Button';
import ButtonBlack from './Elems/ButtonBlack';


class Steps extends React.Component {

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
        let ltext = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consectetur consequuntur dolores eaque expedita facere harum maxime necessitatibus, odit pariatur perferendis tempore temporibus voluptate? Aliquid distinctio nemo nobis nostrum odio.'

        return (
            <div>
            <div className="grid_placeholder1">

                <h1>Как это работает?</h1>
                <Grid
                    // style={{'backgroundColor': '#4cffff'}}
                >
                    <Row className="show-grid headrow">
                        <Col className = "headcol" sm={4}
                            // style={{'backgroundColor': '#ff2900'}}
                        >
                            <h2>Шаг 1</h2>


                            <h4> {ltext} </h4>
                            {/*<ButtonBlack>Подробнее</ButtonBlack>*/}
                        </Col>


                        <Col className = "headcol mid_col" sm={4}>
                            <h2> Шаг 2 </h2>

                            <h4> {ltext} </h4>
                            <ButtonBlack>Подробнее</ButtonBlack>
                        </Col>


                        <Col className = "headcol" sm={4}
                            //style={{'backgroundColor': '#38ff45'}}
                        >
                            <h2> Шаг 3 </h2>

                            <h4> {ltext} </h4>
                            {/*<ButtonBlack>Подробнее</ButtonBlack>*/}
                        </Col>
                    </Row>
                </Grid>
            </div>
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

//Steps = connect(mapStateToProps, mapDispatchToProps)(HeadContainer)

export default Steps