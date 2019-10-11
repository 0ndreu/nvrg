import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';


class Botalka extends React.Component {
    render() {
        return (
            <div>
                <Grid>
                    <Row>
                        <Col md={12}>
                            <h1 className={'centered'}>Botalka</h1>
                        </Col>
                    </Row>
                    <Row></Row>
                    <div className="default_wrapper">

                        <p>Проект включает в себя два направления: создание интенсивов по подготовке школьников к ЕГЭ во всех регионах РФ и создание кружков в школах Москвы и Подмосковья.</p>
                        <p>Botalka является неотъемлемой частью проекта «Наука в регионы», поскольку, по словам менеджера проекта Тюриковой Юлии, главная цель – это «повышение конкурентоспособности учащихся региональных школ на ЕГЭ и олимпиадах».</p>
                        <p>И на интенсивах и на кружках школьники будут готовиться к ЕГЭ и олимпиадам по математике, физике, информатике, химии и биологии. Программа занятий составлена методистами проекта «Наука в регионы» с использованием материалов, наработанных за годы функционирования проекта, утверждена преподавателями МФТИ и Физтех-Лицея.</p>
                    </div>
                </Grid>


                <div className="bk_start">
                    <div className="dtl bk_1">
                        <Grid>
                            <Row>
                                <Col md={12}>
                                    <div className="default_wrapper" >
                                        <p><b>Интенсивы</b> - это 5-дневное обучение по 10 академических часов в день во время школьных каникул во всех регионах РФ.</p>
                                        <p><b>Кружки</b> – это занятия по 3 академических часа 2 раза в неделю в течение всего учебного года в школах Москвы и Подмосковья.</p>
                                    </div>
                                </Col>
                            </Row>
                        </Grid>
                    </div>
                </div>

                    <div style={{ 'marginTop': '-10px' }} className="bk_start2">
                        <div className="dtl bk_2">
                            <Grid>
                                <Row>
                                    <Col md={12}>
                                        <div className="default_wrapper">
                                            <p>Занятия будут вести студенты старших курсов, аспиранты и выпускники МФТИ, МГУ и других ведущих вузов Москвы с опытом преподавательской деятельности и проведения занятий в ВФТШ, ЗФТШ, а также факультативов в школах Москвы.</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Grid>
                        </div>
                    </div>

                    <div style={{ 'marginTop': '-10px' }} className="bk_start3">
                        <div className="dtl bk_3">
                            <Grid>
                                <Row>
                                    <Col md={12}>
                                        <div className="default_wrapper">
                                            <p>По вопросам участия в интенсивах и кружках пишите менеджеру проекта Юлии Тюриковой: <a href="mailto:yuliya@botalka.com">yuliya@botalka.com</a></p>
                                            <p>Сайт проекта: <a href="http://botalka.com/">http://botalka.com/</a></p>
                                        </div>
                                    </Col>
                                </Row>
                            </Grid>
                        </div>
                    </div>

                    <div style={{ 'marginTop': '-10px' }} className="bk_start2">
                        <div className="dtl bk_2">
                        </div>
                    </div>
            </div>
        );
    }
}

export default Botalka