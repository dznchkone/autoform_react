import React, {useState} from "react";
import {Button, Col, Modal, Row} from "react-bootstrap";

import "./Footer.css"



const Footer = () => {

    const [modalShow, setModalShow] = useState(false);

    return (
        <Row className="bg-dark footer">
            <Col className="d-flex text-white justify-content-between flex-row align-content-center">
                <div className="mt-auto mb-auto">
                    Autoform:
                    front-end v1.0.0 |
                    back-end  v1.0.0
                </div>
                <div className="mt-auto mb-auto">
                    <Button
                        onClick={()=>{setModalShow(true)}}
                    >
                        HELP
                    </Button>
                    <FullScreenModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </div>
            </Col>
        </Row>
    )
}

function FullScreenModal(props) {
    return (
        <Modal
            {...props}
            scrollable={true}
            fullscreen={true}
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    HELP
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Вкладка получить из БД</h4>
                <p>
                    В этой вкладке Вы можете получить конфигурацию искомого коммутатора из Rancid
                </p>
                <p>
                  <b>Management IP</b> - введите в это поле IP искомого коммутатора из Rancid.
                </p>
                <p>
                    <b>Login</b> - введите в это поле свой логин от Rancid.
                </p>
                <p>
                    <b>Password</b> - введите в это поле свой пароль от Rancid.
                </p>
                <p>
                    После заполнения полей нажмите кнопку <b>Ор</b>
                </p>
                <h4>Вкладка Сгенерировать</h4>
                <p>
                    В этой вкладке Вы можете сгенерировать конфигурацию для коммутатора Eltex.
                </p>
                <p>
                    <b>Hostname</b> - введите в это поле имя коммутатора. Например SPB_10_10_10_10
                </p>
                <p>
                    <b>Vlan's</b> - в этом поле перечислите все вланы которые будут прописаны на коммутаторе.
                    Диапазон вланов можно прописать через "-". Например: 2, 11, 100-110
                </p>
                <p>
                    <b>Client vlan</b> - в этом поле введите влан IPoE подключения.
                </p>
                <p>
                    <b>Management vlan</b> - в этом поле введите влан сети управления.
                </p>
                <p>
                     <b>Management IP</b> - в этом поле введите IP коммутатора в сети управления.
                </p>
                <p>
                    <b>MASK</b> - в этом поле введите маску сети управления.
                </p>
                <p>
                    <b>IP gateway</b> - в этом поле введите влан шлюз сети управления.
                </p>
                <p>
                    <b>Client ports</b> - в этом поле введите через запятую все активные клиентские порты.
                </p>
                <p>
                    После заполнения полей нажмите кнопку <b>Сгенерировать</b>
                </p>
            </Modal.Body>
        </Modal>
    );
}

export default Footer;
