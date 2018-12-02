/**
 * Created by lesha on 01.02.2018.
 */
import React from 'react';
import {Grid, FormGroup,FormControl, Col, ControlLabel, InputGroup, Radio, HelpBlock } from 'react-bootstrap';
import {Link} from 'react-router-dom';


class AppForm extends React.Component {


    state = {
        value: 5,
    }


    render = () => {
        let src = 'https://script.google.com/macros/s/AKfycbwmZeOlyz-eP3toXGVchbr6_LDz7vJKt_antbNFk7rIXTBZMu0/exec';

        return (
            <div className="applicationForms">
                <Col xsOffset={'1'} xs={'10'} smOffset={'2'} sm="8" lgOffset="3" lg="6">

                    <form id ='appForm'>

                        <FormGroup>
                            <label className="control-label requiredField" for="  ">
                                Электронный адрес
                            </label>
                            <input className="form-control" id="  " name="  " type="text"/>
                        </FormGroup>

                        <FormGroup>
                            <ControlLabel>
                                Субъект Российской Федерации
                            </ControlLabel>
                            <FormControl componentClass="select" requiredField name="Субъект Российской Федерации">
                                <option value="First Choice">
                                    First Choice
                                </option>
                                <option value="Second Choice">
                                    Second Choice
                                </option>
                                <option value="Third Choice">
                                    Third Choice
                                </option>
                            </FormControl>
                        </FormGroup>

                        <FormGroup>
                            <div>
                                <button className="btn btn-primary " type="submit">
                                    Submit
                                </button>
                            </div>
                        </FormGroup>

                    </form>

                </Col>

            </div>
        )
    }

}


export default AppForm