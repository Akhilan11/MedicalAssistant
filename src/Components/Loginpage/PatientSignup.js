import React from 'react'

import { Card } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Button, Col, Row } from 'react-bootstrap';

import Signup from '../Loginpage/SignUp.png';

import { useRef } from 'react';
import { signup, login, logout, useAuth } from './firebase';


function PatientSignup() {

    const currentUser = useAuth();

    const emailRef = useRef();
    const passwordRef = useRef();

    async function handleSignup() {
        try {
            await signup(emailRef.current.value, passwordRef.current.value).then(res => {
                console.log("Auth success")
            }).catch(e => console.log(e))
            alert("Signed up successfully")
        }
        catch {
            alert("Error")
        }
    }

    return (


        <div className="App">
            <center>
                <Card style={{ width: "30rem", marginTop: 200 }}>

                    <Card.Img variant="top" src={Signup} />

                    <Card.Body>

                        <Card.Title style={{ textAlign: "center" }}>Patient Signup</Card.Title>
                        <hr />
                        <div>
                            <Form.Floating className="mb-3">
                                <Form.Control
                                    id="floatingInputCustom"
                                    type="email"
                                    ref={emailRef}
                                    placeholder="name@example.com"
                                />
                                <label htmlFor="floatingInputCustom" >Email address</label>
                            </Form.Floating>
                            <Form.Floating>
                                <Form.Control
                                    id="floatingPasswordCustom"
                                    type="password"
                                    ref = {passwordRef}
                                    placeholder="Password"
                                />
                                <label htmlFor="floatingPasswordCustom">Password</label>

                                <p className="justify-content-md-center" style={{ textAlign: "center", marginTop: "1em", marginBottom: "2em" }}>Already Having account? <a href="patient-login">Login</a></p>

                                <Row className="justify-content-md-center" >

                                    <Button variant="primary" type="submit" style={{ width: "8em", marginBottom: 10 }} onClick={handleSignup} >
                                        Signup
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

export default PatientSignup



