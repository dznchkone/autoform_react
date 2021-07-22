import './App.css';

import {Col, Container, Row} from "react-bootstrap";
import Navigation from "./components/Navigation";
import {Switch, Route, Redirect} from "react-router-dom"
import FormGenerateConfig from "./components/FormGenerateConfig";
import FormGetConfig from "./components/FormGetConfig";
import ToastsContainer from "./components/ToastsContainer";
import {useEffect, useState} from "react";
import Footer from "./components/Footer/Footer";

function App() {
    /*
    Для передачи ошибок из компонентов с формой в компоненте App использую хук состояния useState и  функцию handleErrorMessage, 
    которую передаю в виде пропса в компонент формы, т.е если в форме при передаче данных на бэкенд происходит ошибка, она поднимается в компонент App.
    Далее передаю массив errors в компонент-обёртку ToastsContainer,так же в ToastsContainer передаею функцию clearError в виде пропса для поднятия состояния, 
    т.е. при закрытии всплывающего сообщения, я так же удаляю соответсующий элемент из массива errors.
    */


    const [errors, setErrors] = useState([]);
    const [isAuthenticated, setIsAuthenticated] = useState(+localStorage.getItem('auth'));

    const handleErrorMessage = (msg) => {
        const error = {
            id: Date.now(),
            msg
        };
        setErrors(errors => [...errors, error]);
    }

    const handleAuth = () => {
        if (!isAuthenticated) {
            setIsAuthenticated( ()=> 1 );
        } else  {
            setIsAuthenticated( ()=> 0 );
        }
    }

    useEffect(()=>localStorage.setItem('auth',isAuthenticated.toString()),[isAuthenticated])

    const clearError = (id) => {
        const itemIndex = errors.findIndex(item => item.id === id);
        setErrors(errors => [...errors.slice(0, itemIndex), ...errors.slice(itemIndex + 1)]);
    }


    return (
        <Container fluid className="">
            <Navigation isAuthenticated={isAuthenticated} auth={handleAuth}/>
            <Row className="justify-content-center">
                <Col className='form-container'>
                    <Switch>
                        <Route path="/generate" render={() => {
                            return isAuthenticated ? <FormGenerateConfig onError={handleErrorMessage}/> :
                                <Redirect to="/getfromdb"/>;
                        }}>

                        </Route>
                        <Route path="/getfromdb">
                            <FormGetConfig onError={handleErrorMessage}/>
                        </Route>
                        <Route exact path="/">
                            <Redirect to="/getfromdb"/>
                        </Route>
                    </Switch>
                </Col>
            </Row>
            <Footer/>
            <ToastsContainer messages={errors} clearError={clearError}/>
        </Container>
    );
}

export default App;
