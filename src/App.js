import './App.css';

import {Col, Container, Row} from "react-bootstrap";
import Navigation from "./components/Navigation";
import {Switch, Route, Redirect} from "react-router-dom"
import FormGenerateConfig from "./components/FormGenerateConfig";
import FormGetConfig from "./components/FormGetConfig";
import ToastsContainer from "./components/ToastsContainer";
import {useState} from "react";

function App() {
    const [errors, setErrors] = useState([]);


    const handleErrorMessage = (msg)=>  {
        const error = {
            id: Date.now(),
            msg
        }
        setErrors(errors=>[...errors, error]);
    }

    const clearError = (id)=> {
        const itemIndex = errors.findIndex(item => item.id === id);
        setErrors(errors=>[...errors.slice(0,itemIndex),...errors.slice(itemIndex+1)]);
    }



    return (
        <Container fluid>
            <Navigation/>
            <Row className="justify-content-center">
                <Col className='form-container'>
                    <Switch>
                        <Route path="/generate">
                            <FormGenerateConfig onError={handleErrorMessage}/>
                        </Route>
                        <Route path="/getfromdb" >
                            <FormGetConfig onError={handleErrorMessage}/>
                        </Route>
                        <Route exact path="/">
                            <Redirect to="/generate"/>
                        </Route>
                    </Switch>
                </Col>
            </Row>
            <ToastsContainer messages={errors} clearError={clearError}/>
        </Container>
    );
}

export default App;
