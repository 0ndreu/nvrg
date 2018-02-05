import React from 'react';
import {Navbar, NavDropdown, MenuItem, Nav, NavItem, Grid, Row, Col, DropdownButton} from 'react-bootstrap';

import {Link} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';


//import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';

class HeaderBar extends React.Component {

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
            <div>

            <Navbar collapseOnSelect fixedTop fluid className="nv-wrapper">
                <Navbar.Header>
                    {/*<Navbar.Brand>*/}
                        <LinkContainer to='/'>
                                <div className="logo2">
                                    <div className="nr_text">НР</div>
                                    {/*<div className="logo_low">*/}
                                        {/*наука в регионы*/}
                                    {/*</div>*/}
                                </div>
                                {/*<div className="logo" >*/}
                                    {/*<div>Наука</div>*/}
                                    {/*<div>в регионы</div>*/}
                                    {/*/!*<div className="undertext">Образовательный проект</div>*!/*/}
                                {/*</div>*/}
                        </LinkContainer>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>

                    <Nav pullRight>
                        {/*<LinkContainer to='/management'>*/}
                            {/*<NavItem>О проекте</NavItem>*/}
                        {/*</LinkContainer>*/}

                        {/*<LinkContainer to='/about_project'>*/}

                        {/*</LinkContainer>*/}

                        {/*<DropdownButton title="Dropdown">*/}
                            {/*<MenuItem href="#books">Books</MenuItem>*/}
                            {/*<MenuItem href="#podcasts">Podcasts</MenuItem>*/}
                            {/*<MenuItem href="#">Tech I Like</MenuItem>*/}
                            {/*<MenuItem href="#">About me</MenuItem>*/}
                            {/*<MenuItem href="#addBlog">Add a Blog</MenuItem>*/}
                        {/*</DropdownButton>*/}

                        {/**/}
                        {/*<LinkContainer to='/program'>*/}
                            {/*<NavItem>Программа</NavItem>*/}
                        {/*</LinkContainer>*/}

                        <NavDropdown eventKey={1} title="О проекте" id="basic-nav-dropdown">
                            <LinkContainer to='/management'><MenuItem eventKey={2}>Команда проекта</MenuItem></LinkContainer>
                        </NavDropdown>

                        {/*<LinkContainer to='/professors'>*/}

                            <NavDropdown eventKey={3} title="Программа" id="basic-nav-dropdown">
                                <LinkContainer to='/professors'><MenuItem eventKey={3.1}>Преподаватели</MenuItem></LinkContainer>
                                <LinkContainer to='/schedule'><MenuItem  eventKey={3.2}>Расписание смен</MenuItem></LinkContainer>
                                <LinkContainer to='/cultural_program'><MenuItem  eventKey={3.3}>Культурная программа</MenuItem></LinkContainer>
                                <LinkContainer to='/methodical_materials'><MenuItem  eventKey={3.4}>Методические материалы</MenuItem></LinkContainer>
                            </NavDropdown>
                        {/*</LinkContainer>*/}


                        <LinkContainer to='/help'>
                            <NavItem> Помощь</NavItem>
                        </LinkContainer>


                        {/*<LinkContainer to='/aboutproject'>*/}

                        {/*</LinkContainer>*/}
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
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

//HeaderBar = connect(mapStateToProps, mapDispatchToProps)(HeaderBar)

export default HeaderBar