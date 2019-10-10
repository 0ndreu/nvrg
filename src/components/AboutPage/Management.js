/**
 * Created by lesha on 02.01.2018.
 */
import React from 'react';
import {Grid, Thumbnail, Row, Col, Image, Clearfix} from 'react-bootstrap';


class Management extends React.Component {

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
                                    <Image src="/assets/managers/turik.jpg" responsive rounded/>
                                    <h3>Региональный специалист</h3>
                                    <hr/>
                                    <p>Юлия Тюрикова</p>
                                    <p>Тел.: +7(985)843-70-77</p>
                                    <p>Email: tyurikova.yua@phystech.edu</p>
                                </Thumbnail>
                            </Col>

                            <Col xs={12} sm={12} md={6} lg={4}>
                                <Thumbnail>
                                    <Image src="/assets/managers/svetl.jpg" responsive rounded/>
                                    <h3>Методист по физике</h3>
                                    <hr/>
                                    <p>Александр Светличный</p>
                                    <p>Тел.: +7(915)419-89-57</p>
                                    <p>Email: svetlichnyy.alex@yandex.ru</p>
                                </Thumbnail>
                            </Col>

                            <Col xs={12} sm={12} md={6} lg={4}>
                                <Thumbnail>
                                    <Image src="/assets/managers/vov.jpg" responsive rounded/>
                                    <h3>Методист по математике</h3>
                                    <hr/>
                                    <p>Иван Вовченко</p>
                                    <p>Тел.: +7(985)352-88-64</p>
                                    <p>Email: trample.mensell@mail.ru</p>
                                </Thumbnail>
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </div>
        )
    }

}

export default Management