import React from 'react';
import {Navbar, NavDropdown, MenuItem, Nav, NavItem, Grid, Row, Col, DropdownButton} from 'react-bootstrap';

import {Link} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';


class HeaderBar extends React.Component {

    render = () => {
        return (
            <div>

            <Navbar collapseOnSelect fixedTop fluid className="nv-wrapper">
                <Navbar.Header>
                        <LinkContainer to='/'>
                                <div className="logo2">
                                    <div className="nr_text">НР</div>
                                </div>

                        </LinkContainer>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>

                    <Nav pullRight>

                        <NavDropdown eventKey={1} title="О проекте" id="basic-nav-dropdown">
                            <LinkContainer to='/management'><MenuItem eventKey={2}>Команда проекта</MenuItem></LinkContainer>
                        </NavDropdown>

                            <NavDropdown eventKey={3} title="Программа" id="basic-nav-dropdown">
                                <LinkContainer to='/professors'><MenuItem eventKey={3.1}>Преподаватели</MenuItem></LinkContainer>
                                <LinkContainer to='/schedule'><MenuItem  eventKey={3.2}>Расписание смен</MenuItem></LinkContainer>
                                <LinkContainer to='/cultural_program'><MenuItem  eventKey={3.3}>Культурная программа</MenuItem></LinkContainer>
                                <LinkContainer to='/methodical_materials'><MenuItem  eventKey={3.4}>Методические материалы</MenuItem></LinkContainer>
                            </NavDropdown>

                        <LinkContainer to='/help'>
                            <NavItem> Помощь</NavItem>
                        </LinkContainer>

                    </Nav>

                </Navbar.Collapse>
            </Navbar>
                </div>

        )
    }

}

export default HeaderBar