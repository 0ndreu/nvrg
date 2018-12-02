/**
 * Created by lesha on 03.01.2018.
 */
import React from 'react';
import { Table, Grid, PanelGroup, Panel} from 'react-bootstrap';
import ShdConstructor from './ShdConstructor'

class Schedule extends React.Component {


    state = {
        activeKey: '4',
    }


    currentEvent(currentTime, deadTime) {
        let i = 0;
        while (currentTime > deadTime[i]) {
            i++;
        }
        let eventnum = i+4;
        return eventnum
    }

    componentDidMount(){

    }

    componentWillReceiveProps(){

    }

    render = () => {


        return (
            <div className="schedule">
                <Grid>
                    <br/>
                    <h1>Расписание смен</h1>
                    <br/>
                    <Table striped bordered hover style={{textAlign: 'center', fontSize: '18px'}}>
                        <thead>
                        <tr>
                            <td scope="col">Смена</td>
                            <td scope="col">Направление</td>
                            <td scope="col">Класс</td>
                            <td scope="col">Дата проведения</td>
                        </tr>
                        </thead>
                        <tbody>


                        <tr>
                            <td>Смена №7</td>
                            <td>Химия+Биология</td>

                            <td>9 класс</td>
                            <td>4 марта 2018 - 17 марта 2018</td>
                        </tr>

                        <tr>
                            <td>Смена №7</td>
                            <td>Математика+Физика</td>

                            <td>10 класс</td>
                            <td>4 марта 2018 - 17 марта 2018</td>
                        </tr>

                        <tr>
                            <td>Смена №8</td>
                            <td>Химия+Биология</td>
                            <td>10 класс</td>
                            <td>2 апреля 2018 - 14 апреля 2018</td>
                        </tr>

                        <tr>
                            <td>Смена №8</td>
                            <td>Математика+Физика</td>
                            <td>9 класс</td>
                            <td>2 апреля 2018 - 14 апреля 2018</td>
                        </tr>

                        <tr>
                            <td>Смена №9</td>
                            <td>Химия+Биология</td>

                            <td>10 класс</td>
                            <td>22 апреля 2018 - 5 мая 2018</td>
                        </tr>


                        <tr>
                            <td>Смена №10</td>
                            <td>Математика+Информатика</td>

                            <td>10 класс</td>
                            <td>17 июня 2018 - 30 июня 2018</td>
                        </tr>

                        </tbody>
                    </Table>
                    <br/>
                    <br/>

                </Grid>
            </div>
        )
    }

}



export default Schedule