import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

const Navigation = () =>{
    return (
        <Navbar bg="dark" variant="dark">
            <Nav className="mr-auto">
                <Link to="generate" className="nav-link" >Сгенерировать</Link>
                <Link to="getfromdb" className="nav-link">Получить из БД</Link>
            </Nav>
        </Navbar>
    )
}

export default Navigation;