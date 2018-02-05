import React from 'react';
import {Panel, PanelGroup,Grid} from 'react-bootstrap';
import {Link} from 'react-router-dom';

//import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';

class Help extends React.Component {

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
                <div className="faq">
                    <Grid>
                        <h1>Часто задаваемые вопросы</h1>

                        <PanelGroup activeKey={this.state.activeKey} onSelect={(activeKey) => this.setState({activeKey: activeKey})} accordion>

                            <Panel header="Как принять участие в проекте?" eventKey="1">
                                <div className="text_wr">
                                    <p>Подать заявку на участие в проекте можно, если вы являетесь представителем образовательной организации.</p>
                                    <p>Если вы не являетесь представителем образовательной организации, но хотите каким-либо образом сотрудничать с проектом, то по всем вопросам пишите на почту <a href="mailto:yuliya@naukavregiony.com">yuliya@naukavregiony.com</a>.</p>
                                    <p>Для того, чтобы принять участие в проекте, необходимо:</p>
                                    <ul>
                                        <li>ознакомиться с описанием проекта и расписанием очных смен на сайте;</li>
                                        <li>набрать делегацию: группу учащихся не менее 15 человек и 2 учителей (по одному учителю на каждый профильный предмет смены), желающих пройти отбор и поехать на очную смену в МФТИ;</li>
                                        <li>подать заявку на сайте НР;</li>
                                        <li>ждать ответа на электронную почту.</li>
                                    </ul>
                                </div>
                            </Panel>

                            <Panel header="Когда начинается набор на смену?" eventKey="2">
                                <div className="text_wr">
                                <p>Заявки можно подавать за любой срок не позднее 40 дней до начала выбранной смены.</p>
                                </div>
                            </Panel>

                            <Panel header="Где проходят очные смены «Науки в Регионы»?" eventKey="3">
                                <div className="text_wr">
                                <ul>
                                    <li>Учатся и живут участники на территории МФТИ. Проживают участники очных смен в общежитии МФТИ квартирного типа, питаются в столовых МФТИ.</li>
                                    <li>С момента заезда делегации на смену до самого момента отъезда региональную группу сопровождают кураторы – студенты МФТИ (в случае приезда делегации на вокзал в Москве кураторы встречают группу на вокзале).</li>
                                </ul>
                                </div>

                            </Panel>

                            <Panel header="Сколько стоит участие в проекте?" eventKey="4">
                                <div className="text_wr">
                                <ul>
                                    <li>Обучение, питание и проживание для участников проекта (учеников и учителей из региональной делегации) бесплатно, участники проплачивают самостоятельно только дорогу.</li>
                                </ul>
                                </div>

                            </Panel>

                            <Panel header="Можно ли подать заявку больше чем на одну смену?" eventKey="5">
                                <div className="text_wr">
                                <ul>
                                    <li>Можно. Заявки будут на таком же основании участвовать в конкурсе, но стать участниками проекта сможет только одна делегация от одного региона.</li>
                                </ul>
                                </div>

                            </Panel>

                            <Panel header="Можно ли подать заявку повторно, если уже однажды принимали участие в проекте?" eventKey="6">
                                <div className="text_wr">
                                <ul>
                                    <li>Да, подать можно, но не на следующую по сроку смену.</li>
                                </ul>
                                </div>

                            </Panel>


                            <Panel header="Какие документы необходимо оформить от региона и от школы?" eventKey="7">
                                <div className="text_wr">
                                <p>Документы, необходимые к заполнению от органа исполнительной власти в сфере образования региона:</p>
                                <ul>
                                    <li>Приказ в свободной форме;</li>
                                    <li>Заявка на участие;</li>
                                    <li>Договор о сотрудничестве.</li>
                                </ul>

                                <p>Документы от школы:</p>
                                <ul>
                                    <li>Приказ.</li>
                                </ul>
                                <p>Документы от детей и родителей:</p>
                                <ul>
                                    <li>Согласие родителей на участие детей в проекте;</li>
                                    <li>Прививочный сертификат;</li>
                                    <li>Портфолио;</li>
                                    <li>Согласие на обработку персональных данных;</li>
                                    <li>Медицинская справка формы 079/у</li>
                                </ul>
                                <p>Документы от учителей:</p>
                                <ul>
                                    <li>Портфолио;</li>
                                    <li>Согласие на обработку персональных данных;</li>
                                    <li>Копия паспорта;</li>
                                    <li>Копия диплома.</li>
                                </ul>
                                </div>
                            </Panel>

                    </PanelGroup>
                    </Grid>
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

//Help = connect(mapStateToProps, mapDispatchToProps)(Help)

export default Help
