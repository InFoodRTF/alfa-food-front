import React from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import styles from "./LoginPage.module.css"
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';
import logo from './logo.svg'
import {Button, FormLabel, Image, Form} from "react-bootstrap";
export class LoginPage extends React.Component {
    render() {
        return (
            <div className="m-5">
                <Container className={styles.OrderHistoryContainer}>
                    <Card className={styles.OrderHistoryCard}>
                        <div className="">
                            <div className="text-center m-3 p-3">
                                <img src={logo} alt="Logo" />
                            </div>
                            <h2 className="fw-bold m-3 p-3 text-center">Вход</h2>

                            <div className="row d-flex justify-content-center">
                                <Form.Group className="mb-3 w-75" controlId="formBasicPassword">
                                    <Form.Control type="text" placeholder="Логин" />
                                </Form.Group>
                            </div>

                            <div className="row d-flex justify-content-center">
                                <Form.Group className="mb-3 w-75" controlId="formBasicPassword">
                                    <Form.Control type="password" placeholder="Пароль" />
                                </Form.Group>
                            </div>

                            <div className="text-center m-3">Забыли пароль?</div>

                            <div className="text-center">
                                <Button className="mb-5 w-50 btn btn-danger">Войти</Button>
                            </div>
                        </div>

                    </Card>
                </Container>

            </div>


        )
    }
}