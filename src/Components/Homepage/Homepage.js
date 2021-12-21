import React from 'react'

import DoctorDp from '../Homepage/doctor-dp.png'
import PatientDp from '../Homepage/patient-dp.png'
import Img1 from '../Homepage/carousel-1.png'
import Img3 from '../Homepage/carousel-2.png'
import Img2 from '../Homepage/carousel-3.png'

import { Container } from 'react-bootstrap'
import { Image } from 'react-bootstrap'
import icon from '../Homepage/Homepage-icon.png'
// import Button from '@restart/ui/esm/Button'
import { Card, Button } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Carousel } from 'react-bootstrap'

import { Link } from 'react-router-dom'

function Homepage() {
    return (
        <div>
                <div style={{ padding:"5%" }}>
                
                <h1 style={{fontFamily: "Barlow Semi Condensed,sans-serif",fontSize:50,fontWeight:"bolder",paddingBottom:"5%"}}> MED - ASSISTANT </h1>
                
                <Row>
                <Col md={6}>
                {/* <img src={icon} style={{width:"30%",alignItems:"start"}}></img> */}
                <Image src={icon} rounded style={{ width: "70%" }} />
                </Col>

                <Col md={6}>
                <p className="content" style={{ float: "left" ,padding:"5%", fontSize:30,width:"90%", fontFamily: "Barlow Semi Condensed,sans-serif"}}>
                    The medical assistant which would help patients to interact with doctors for regular health checkup . This assistant makes it easy for patients for regular communication
                    with doctors and monitor their temperature,spo2,pulse rate which would be recorded as and then by the sensors used in the medical assistant.
                    This makes medical equipment’s more efficient by allowing real time monitoring of patient health, in which sensors acquire data. Patients can find it easy to
                    have a eye on their health regularly alongside interacting with doctors for betterment.Doctors can check in regularly and update the prescription of patients whenever required using the web-app integrated within.
                </p>
                </Col>
                </Row>
                </div>

                <Container>

                <Carousel variant="dark">
                <Carousel.Item>
                <img src = {Img1} style={{width:"70%"}}/>
                    <Carousel.Caption>
                    <h5 style={{backgroundColor:"white"}}>Research</h5>
                    <p style={{backgroundColor:"white"}}>We study your problem</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img src = {Img2} style={{width:"70%"}}/>
                    <Carousel.Caption>
                    <h5 style={{backgroundColor:"white"}}>Analyse</h5>
                    <p style={{backgroundColor:"white"}}>We analyse it</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src = {Img3} style={{width:"70%"}}/>
                    <Carousel.Caption>
                    <h5 style={{backgroundColor:"white"}}>Result</h5>
                    <p style={{backgroundColor:"white"}}>We deliver it</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>

                <Row style={{ padding: "10%" }}>
                    <Col md={6}>

                        <Card style={{ width: '30rem' }}>
                            <Card.Img variant="top" src={DoctorDp} style={{ height: 500 }} />
                            <Card.Body>
                                <Card.Title>DOCTOR</Card.Title>
                                <hr />
                                <Card.Text style={{fontSize:25,fontFamily: "Barlow Semi Condensed,sans-serif"}}>
                                    Doctors can login their <br />  Account Here
                                </Card.Text>
                                <Row className="justify-content-md-center">
                                    <Col md={2}>
                                    <Link to="doctor-signup">
                                        <Button style={{marginRight:"2em"}} variant="primary" >Request</Button> <br />
                                    </Link>
                                    </Col>
                                    <Col md={2}>
                                    <Link to="doctor-login">
                                        <Button style={{marginLeft:"1em"}} variant="success">Login</Button>
                                    </Link>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6}>
                        <Card style={{ width: '30rem' }}>
                            <Card.Img variant="top" src={PatientDp} style={{ height: 500 }} />
                            <Card.Body>
                                <Card.Title>PATIENT</Card.Title>
                                <hr />
                                <Card.Text style={{fontSize:25,fontFamily: "Barlow Semi Condensed,sans-serif"}}>
                                    Patients can login their <br /> Account Here
                                </Card.Text>
                                <Row className="justify-content-md-center">
                                    <Col md={2}>
                                    <Link to="/patient-signup">
                                        <Button style={{marginRight:"1em"}} variant="primary" >Signup</Button> <br />
                                    </Link>
                                    </Col>
                                    <Col md={2}>
                                    <Link to="patient-login">
                                        <Button style={{marginLeft:"1em"}} variant="success">Login</Button>
                                    </Link>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

<script>
  AOS.init();
</script>

export default Homepage
