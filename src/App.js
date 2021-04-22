import './App.css';

import {Col, Container, Row} from "react-bootstrap";
import Navigation from "./components/Navigation";
import {Switch, Route} from "react-router-dom"
import FormGenerateConfig from "./components/FormGenerateConfig";
import FormGetConfig from "./components/FormGetConfig";

function App() {
    return (
        <Container fluid>
            <Navigation/>
            <Row className="justify-content-center">
                <Col>
                    <Switch>
                        <Route path="/generate" component={FormGenerateConfig}/>
                        <Route path="/getfromdb" component={FormGetConfig}/>
                        <Route exact path="/" component={FormGenerateConfig}/>
                    </Switch>
                </Col>
            </Row>
        </Container>
    );
}

export default App;
