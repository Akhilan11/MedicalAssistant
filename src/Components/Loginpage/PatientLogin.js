import React from 'react'

import { Card } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button, Col, Row } from 'react-bootstrap';

import Login from '../Loginpage/Login.png';
import PatientSignup from './PatientSignup';

import { useRef, useState } from 'react';
import { signup, login, logout, useAuth } from './firebase';
import { Navigate } from 'react-router'

function PatientLogin() {

    const currentUser = useAuth();

    const [re, setRe] = useState(0);
    const emailRef = useRef();
    const passwordRef = useRef();

    async function handleLogin() {
        try {
            await login(emailRef.current.value, passwordRef.current.value);
            setRe(1);
            alert("Logged in Successfully");

        }
        catch {
            alert("Error")
        }
    }

    if (re == 1)
        return <Navigate to="/patient-landing" />
    else

        return (
            <div className="App">
                <center>
                    <Card style={{ width: "30rem", marginTop: 200 }}>

                        <Card.Img variant="top" src={Login} />

                        <Card.Body>

                            <Card.Title style={{ textAlign: "center" }}>Patient Login</Card.Title>
                            <hr />
                            <div>
                                <Form.Floating className="mb-3">
                                    <Form.Control
                                        id="floatingInputCustom"
                                        type="email"
                                        ref={emailRef}
                                        placeholder="name@example.com"
                                    />
                                    <label htmlFor="floatingInputCustom">Email address</label>
                                </Form.Floating>
                                <Form.Floating>
                                    <Form.Control
                                        id="floatingPasswordCustom"
                                        type="password"
                                        ref={passwordRef}
                                        placeholder="Password"
                                    />
                                    <label htmlFor="floatingPasswordCustom">Password</label>

                                    <p className="justify-content-md-center" style={{ textAlign: "center", marginTop: "1em", marginBottom: "2em" }}>Don't have an account? <a href="patient-signup">Signup</a></p>

                                    <Row className="justify-content-md-center" >

                                        <Button variant="primary" type="submit" style={{ width: "8em", marginBottom: 10 }} onClick={handleLogin}>
                                            Login
                                        </Button>

                                    </Row>

                                </Form.Floating>
                            </div>

                        </Card.Body>

                    </Card>
                </center>

            </div>
        )
}

export default PatientLogin
