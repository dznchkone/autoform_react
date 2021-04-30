// Простой навбар

import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const Navigation = () =>{
    return (
        <Navbar bg="dark" variant="dark">
            <Nav>
                <Nav.Item>
                    <NavLink to="generate" className="nav-link" activeClassName="active">Сгенерировать</NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink to="getfromdb" className="nav-link" activeClassName="active">Получить из БД</NavLink>
                </Nav.Item>
            </Nav>
        </Navbar>
    )
}

export default Navigation;