/**
 * Created by lesha on 02.01.2018.
 */
import React from 'react';
import {Grid, Thumbnail, Row, Col, Image, Clearfix} from 'react-bootstrap';
// import {Link} from 'react-router-dom';

//import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';

class Management extends React.Component {

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
            <div className="manpagewr">
                <div className="gallery">
                    <Grid>
                        <div style={{textAlign: 'left'}}>
                            <h1>Команда проекта</h1>
                        </div>
                        <Row >
                            <Col xs={12} sm={12} md={6} lg={4}>
                                <Thumbnail>
                                    <Image src="/assets/managers/shtern.jpg" responsive rounded/>
                                    <h3>Директор фонда</h3>
                                <hr/>
                                    <p>Алексей Штерн</p>
                                    <p>Тел.: +7(916)906-62-98</p>
                                    <p>Email: as@phystechunion.org</p>
                                </Thumbnail>
                            </Col>

                            <Col xs={12} sm={12} md={6} lg={4}>
                                <Thumbnail>
                                    <Image src="/assets/managers/bogdan.jpg" responsive rounded/>
                                    <h3>Руководитель проекта</h3>
                                    <hr/>
                                    <p>Андрей Богданов</p>
                                    <p>Тел.: +7(917)521-23-47</p>
                                    <p>Email: andrey.bogdanov@phystech.edu</p>
                                </Thumbnail>
                            </Col>


                            <Col xs={12} sm={12} md={6} lg={4}>
                                <Thumbnail>
                                    <Image src="/assets/managers/svir.jpg" responsive rounded/>
                                    <h3>Event-специалист</h3>
                                    <hr/>
                                    <p>Кирилл Свирюков</p>
                                    <p>Тел.: +7(925)047-93-58</p>
                                    <p>Email: sviryukov.k@phystech.edu</p>
                                </Thumbnail>
                            </Col>

                            <Col xs={12} sm={12} md={6} lg={4}>
                                <Thumbnail>
                                    <Image src="/assets/managers/turik.jpg" responsive rounded/>
                                    <h3>Региональный специалист</h3>
                                    <hr/>
                                    <p>Юлия Тюрикова</p>
                                    <p>Тел.: +7(985)-843-70-77</p>
                                    <p>Email: tyurikova.yua@phystech.edu</p>
                                </Thumbnail>
                            </Col>

                            <Col xs={12} sm={12} md={6} lg={4}>
                                <Thumbnail>
                                    <Image src="/assets/managers/lomak.jpg" responsive rounded/>
                                    <h3>Руководитель медиагруппы</h3>
                                    <hr/>
                                    <p>Александр Ломакин</p>
                                    <p>Тел.: +7(916)092-63-00</p>
                                    <p>Email: olymps42@mail.ru</p>
                                </Thumbnail>
                            </Col>

                            <Col xs={12} sm={12} md={6} lg={4}>
                                <Thumbnail>
                                    <Image src="/assets/managers/nech.jpg" responsive rounded/>
                                    <h3>Креативный директор</h3>
                                    <hr/>
                                    <p>Алёна Нечаева</p>
                                    <p>Тел.: +7(915)245-14-90</p>
                                    <p>Email: ne4aeva.al@gmail.com</p>
                                </Thumbnail>
                            </Col>


                            <Col xs={12} sm={12} md={6} lg={4}>
                                <Thumbnail>
                                    <Image src="/assets/managers/vov.jpg" responsive rounded/>
                                    <h3>Главный методист</h3>
                                    <hr/>
                                    <p>Иван Вовченко</p>
                                    <p>Тел.: +7 (985)352-88-64</p>
                                    <p>Email: trample.mensell@mail.ru</p>
                                </Thumbnail>
                            </Col>
                            <Col xs={12} sm={12} md={6} lg={4}>
                                <Thumbnail>
                                    <Image src="/assets/managers/mix.jpg" responsive rounded/>
                                    <h3>Главный куратор</h3>
                                    <hr/>
                                    <p>Михаил Хаджинов</p>
                                    <p>Тел.: +7(985)996-55-48</p>
                                    <p>Email: m.khadjinov@mail.ru</p>
                                </Thumbnail>
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

//Management = connect(mapStateToProps, mapDispatchToProps)(Management)

export default Management