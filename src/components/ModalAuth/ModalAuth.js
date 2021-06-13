import React from 'react';
import "./ModalAuth.css"
import {Button, Col, Container, Form, Row} from "react-bootstrap";

const ModalAuth = (props) => {
    return (
        <div className="modal-container">
            <Container fluid>
                <Row className="justify-content-md-center">
                    <Col md={4} className="min-vh-100 d-flex flex-column justify-content-md-center">
                        <Form >
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Введите пароль</Form.Label>
                                <Form.Control type="password" placeholder="Пароль"/>
                            </Form.Group>
                            <Button variant="primary">
                                Войти
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ModalAuth;