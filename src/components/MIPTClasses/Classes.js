import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class Classes extends React.Component {

    render = () => {
        return (
            <div>
                <Grid >
                    <Row>
                        <Col md={12}>
                            <h1 className={'centered'}>Физтех-кружки</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <div className="default_wrapper">
                                <p>Главная цель проекта – повышение успеваемости и конкурентоспособности учеников из регионов России при поступлении в вузы по предметам естественно-научной направленности.</p>
                                <p>Для достижения этой цели в школах будут созданы кружки по физике и по математике, обучение в которых будет проходить по составленным преподавателями МФТИ программам. Учителя, изъявившие желание создать кружок, пройдут очные курсы повышения квалификации в МФТИ с последующей аттестацией и получением сертификата ФРФШ на право ведения Физтех-кружков. ФРФШ обеспечит учителей методическими пособиями и заданиями для тестирования, а также будет проводить консультации, вебинары и олимпиады. По итогам года может быть принято решение о приглашении наиболее успешных кружков на очные смены Науки в регионы. Условия отбора будут определены позже в III кв. 2019.</p>
                            </div>
                        </Col>
                    </Row>
                </Grid>


                <div className="bk_start">
                    <div className="dtl bk_1">
                        <Grid >
                            <Row>
                                <Col md={12}>
                                    <div className="default_wrapper">
                                        <p>Проект даст толчок к формированию устойчивого сообщества МФТИ-учителя-ученики. Это позволит решить сразу несколько задач:</p>
                                        <Col md={12}>
                                            <ol>
                                                <li>Обеспечение связи между учителем и методистом из МФТИ;</li>
                                                <li>Обмен опытом и лучшими методиками преподавания между учителями;</li>
                                                <li>Возможность для учеников консультироваться с преподавателями МФТИ по сложным учебным вопросам.</li>
                                            </ol>
                                        </Col>
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
                                <Col md={12}> <h3 className={''}>Команда процесса:</h3> </Col>
                            </Row>
                            <Row>
                                <Col md={12}>
                                    <div className="default_wrapper">
                                        <ul>
                                            <li>Алексей Штерн - исполнительный директор Физтех-Союза;</li>
                                            <li>Тюрикова Юлия – менеджер проекта Наука в регионы;</li>
                                            <li>Мухарамова Диляра – консультант.</li>
                                        </ul>
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
                                        <p>Для того, чтобы принять участие в проекте, пишите на почту: <a href="mailto:yuliya@naukavregiony.com">yuliya@naukavregiony.com</a> и ставьте тему: «ФИЗТЕХ_КРУЖКИ»</p>
                                        <p>Материально помочь проекту можно через сайт Фонда: <a href='http://go2phystech.ru/index.php?id=25'>http://go2phystech.ru/index.php?id=25</a>, указав цель пожертвования: «ФИЗТЕХ_КРУЖКИ».</p>
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
        )

    }

}

export default Classes