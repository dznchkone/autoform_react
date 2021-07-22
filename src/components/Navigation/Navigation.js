// Простой навбар

import React from "react";
import {Nav, Navbar, FormCheck} from "react-bootstrap";
import {NavLink} from "react-router-dom";

import './Navbar.css';

const Navigation = (props) => {

    const generate = props.isAuthenticated ? <NavLink to="generate" className="nav-link" activeClassName="active">Сгенерировать</NavLink>: null;
    return (
        <Navbar bg="dark" variant="dark" className="d-flex justify-content-between">
            <Nav>
                <Nav.Item>
                    <NavLink to="getfromdb" className="nav-link" activeClassName="active">Получить из БД</NavLink>
                </Nav.Item>
                <Nav.Item>
                    {generate}
                </Nav.Item>
            </Nav>
            <FormCheck checked={props.isAuthenticated}
                onChange={()=>props.auth()}
                type="switch"
                id="is-admin"
                />
        </Navbar>
    )
}

export default Navigation;