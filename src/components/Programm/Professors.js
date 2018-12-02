import React from 'react';
import {Grid, Thumbnail, Row, Col, Image} from 'react-bootstrap';
import {Link} from 'react-router-dom';

//import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';

class Professors extends React.Component {

    render = () => {
        return (
            <div className="pgpagewr">
                <Grid>
                    <h1>Преподаватели МФТИ, принимающие участие в организации учебного процесса проекта</h1>
                </Grid>
                <div className="gallery">
                    <Grid>
                        <Row>
                            <Col xs={12} sm={4}>
                                <Thumbnail>
                                    <Image src="/assets/professors/agahanov.jpg" responsive rounded/>
                                    <h3>Агаханов</h3>
                                    <h3>Назар Хангельдыевич</h3>
                                    <p>Доцент кафедры высшей математики МФТИ, кандидат физико-математических наук</p>
                                </Thumbnail>
                            </Col>
                            <Col xs={12} sm={4}>
                                <Thumbnail>
                                    <Image src="/assets/professors/podlipskiy.jpg" responsive rounded/>
                                    <h3>Подлипский</h3>
                                    <h3>Олег Константинович</h3>
                                    <p>Доцент кафедры высшей математики МФТИ, кандидат физико-математических наук</p>
                                </Thumbnail>
                            </Col>
                            <Col xs={12} sm={4}>
                                <Thumbnail>
                                    <Image src="/assets/professors/molchanov.jpg" responsive rounded/>
                                    <h3>Молчанов</h3>
                                    <h3>Евгений Геннадьевич</h3>
                                    <p>Преподаватель кафедры высшей математики и кафедры математических основ управления МФТИ</p>
                                </Thumbnail>
                            </Col>
                            {/*</Row>*/}
                            {/*<Row>*/}
                            <Col xs={12} sm={4}>
                                <Thumbnail><Image src="/assets/professors/gluxov.jpg" responsive rounded/>
                                    <h3>Глухов</h3>
                                    <h3>Илья Викторович</h3>
                                    <p>Преподаватель кафедры высшей математики МФТИ</p>
                                </Thumbnail>
                            </Col>
                            <Col xs={12} sm={4}>
                                <Thumbnail><Image src="/assets/professors/golovko.jpg" responsive rounded/>
                                    <h3>Головко</h3>
                                    <h3>Андрей Юрьевич</h3>
                                    <p>Преподаватель кафедры высшей математики МФТИ</p>
                                </Thumbnail>
                            </Col>
                            <Col xs={12} sm={4}>
                                <Thumbnail><Image src="/assets/professors/kuzmichev.jpg" responsive rounded/>
                                    <h3>Кузьмичев</h3>
                                    <h3>Сергей Дмитриевич</h3>
                                    <p>Доцент кафедры общей физики МФТИ, кандидат физико-математических наук</p>
                                </Thumbnail>
                            </Col>
                            {/*</Row>*/}
                            {/*<Row>*/}
                            <Col xs={12} sm={4}>
                                <Thumbnail><Image src="/assets/professors/yavorskiy.jpg" responsive rounded/>
                                    <h3>Яворский</h3>
                                    <h3>Владислав Антонович</h3>
                                    <p>Доцент департамента молекулярной и биологической физики МФТИ, кандидат физико-математических наук</p>
                                </Thumbnail>
                            </Col>

                            <Col xs={12} sm={4}>
                                <Thumbnail><Image src="/assets/professors/kalashnikov.jpg" responsive rounded/>
                                    <h3>Калашников</h3>
                                    <h3>Александр Дмитриевич</h3>
                                    <p>Преподаватель кафедры общей физики МФТИ, кандидат физико-математических наук</p>
                                </Thumbnail>
                            </Col>

                            <Col xs={12} sm={4}>
                                <Thumbnail><Image src="/assets/professors/yidin.jpg" responsive rounded/>
                                    <h3>Юдин</h3>
                                    <h3>Иван Сергеевич</h3>
                                    <p>Преподаватель кафедры общей физики МФТИ</p>
                                </Thumbnail>
                            </Col>

                            <Col xs={12} sm={4} mdOffset={4} lgOffset={4}>
                                <Thumbnail><Image src="/assets/professors/koldynov.jpg" responsive rounded/>
                                    <h3>Колдунов</h3>
                                    <h3>Леонид Модестович</h3>
                                    <p>Преподаватель кафедры общей физики МФТИ</p>
                                </Thumbnail>
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </div>
        )

    }

}

export default Professors