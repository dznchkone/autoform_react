// Простой навбар

import React, {useEffect} from "react";
import {Nav, Navbar, FormCheck} from "react-bootstrap";
import {NavLink} from "react-router-dom";

import './Navbar.css';

const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Nav>
                <Nav.Item>
                    <NavLink to="getfromdb" className="nav-link" activeClassName="active">Получить из БД</NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink to="generate" className="nav-link" activeClassName="active">Сгенерировать</NavLink>
                </Nav.Item>
            </Nav>
            <FormCheck
                disabled={false}
                type="switch"
                id="is-admin"
                className="ml-auto"/>
        </Navbar>
    )
}

export default Navigation;