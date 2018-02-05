/**
 * Created by lesha on 02.01.2018.
 */
import React from 'react';
import {Grid, Glyphicon} from 'react-bootstrap';
// import {Link} from 'react-router-dom';

//import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';

class MethMaterials extends React.Component {

    static defaultProps = {

    }

    static propTypes = {

    }

    state = {

    }

    //ES5 - componentWillMount
    // constructor(props) {
    //     super(props);
    // }

    componentDidMount(){

    }

    componentWillReceiveProps(){

    }

    render = () => {

        return (
            <div className="abpagewr">
                <Grid>
                    <h1>Методические материалы от преподавателей МФТИ</h1>
                    <a href="/assets/documents/math_8.pdf"> <Glyphicon glyph="chevron-right" /> Методические материалы по математике 8 класс</a>
                    <br/>
                    <a href="/assets/documents/math_10.pdf"> <Glyphicon glyph="chevron-right" /> Методические материалы по математике 10 класс</a>
                    <br/>
                    <a href="/assets/documents/fiz_8.pdf"> <Glyphicon glyph="chevron-right" /> Методические материалы по физике 8 класс</a>
                    <br/>
                    <a href="/assets/documents/fiz_10.pdf"> <Glyphicon glyph="chevron-right" /> Методические материалы по физике 10 класс</a>
                    <br/>
                    <h1>Методические материалы от преподавателей Физтех-лицея</h1>
                    <a href="/assets/documents/bio_salnikova_1.pdf"> <Glyphicon glyph="chevron-right" /> Методические материалы по биологии. Целостность организма. - Сальникова Е.И. </a>
                    <br/>
                    <a href="/assets/documents/bio_salnikova_2.pdf"> <Glyphicon glyph="chevron-right" /> Методические материалы по биологии. Основы генной инженерии. - Сальникова Е.И. </a>
                    <br/>
                    <a href="/assets/documents/chemistry_snigereva.pdf"> <Glyphicon glyph="chevron-right" /> Методические материалы по химии. Справочные материалы. - Снигирёва Е.М. </a>
                    <br/>
                    <a href="/assets/documents/chemistry_bogorodskaya.pdf"> <Glyphicon glyph="chevron-right" /> Методические материалы по химии. Структура атома. - Богородская М.А. </a>
                    <br/>
                    <a href="/assets/documents/fiz_prac_tarchevskiy.doc"> <Glyphicon glyph="chevron-right" /> Физпрактикум профильного уровня обучения. Часть I. - Тарчевский А.Е.</a>
                    <br/>
                    <a href="/assets/documents/optica_kurnosov.pdf"> <Glyphicon glyph="chevron-right" /> Методические материалы по физике. Оптика. - к.ф.-м.н. Курносов В.М. </a>
                    <br/>
                    <a href="/assets/documents/math_jestkov.pdf"> <Glyphicon glyph="chevron-right" /> Методические материалы по математике. Иррациональные уравнения. - Жестков С.А. </a>
                    <br/>
                    <a href="/assets/documents/inf_merzlyakov.pdf"> <Glyphicon glyph="chevron-right" /> Методические материалы по информатике. Циклы. - Мерзляков В.В. </a>
                    <br/>
                    <br/>

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

//MethMaterials = connect(mapStateToProps, mapDispatchToProps)(MethMaterials)

export default MethMaterials