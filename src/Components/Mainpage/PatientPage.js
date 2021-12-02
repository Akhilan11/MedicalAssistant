import React, { useState, useEffect } from 'react'

import { collection, getDocs } from "firebase/firestore";
import { db } from '../Loginpage/firebase';

import { Card } from "react-bootstrap";
import { Col,Row } from "react-bootstrap";

import img from './Login.png'
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
              Book Appoinment
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
  
        <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="email" placeholder="Enter Name" />
          </Form.Group>
  
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
        </Row>
  
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>D.O.B</Form.Label>
            <Form.Control type="text" placeholder="DD-MM-YYYY" />
          </Form.Group>
  
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Blood Group</Form.Label>
            <Form.Control type="text" placeholder="Enter Blood Group" />
          </Form.Group>
  
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Age</Form.Label>
            <Form.Control type="number" placeholder="Enter Age" />
          </Form.Group>
  
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="text" placeholder="Enter PhoneNumber" />
          </Form.Group>
        </Row>
  
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control placeholder="Apartment, studio, or floor" />
        </Form.Group>
  
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control placeholder="City"/>
          </Form.Group>
  
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Control placeholder="State"/>
          </Form.Group>
  
          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control placeholder="Zip Code"/>
          </Form.Group>
        </Row>
  
        <hr style={{marginTop:"2em"}}/>
  
        <Row className="mb-3">
        
        <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
          <Form.Label>Medical Condition / History</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
  
        <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
          <Form.Label>Allergy</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        
        </Row>
  
        <Row className="mb-3">
        
        <p>Appoinment</p>
  
        <Form.Group as={Col} controlId="formGridZip">
            {/* <Form.Label>Appoinment</Form.Label> */}
            <Form.Control placeholder="Preferred Date"/>
        </Form.Group>
  
        <Form.Group as={Col} controlId="formGridZip">
            <Form.Control placeholder="Preferred Time"/>
        </Form.Group>
  
        </Row>
  
        <center>
        <Button variant="primary" type="submit" style={{marginTop:"2em"}}>
          Book Appoinment
        </Button>
        </center>
      </Form>
  
  
  
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

function PatientPage() {
    const [doctors, setDoctors] = useState(null);
    const [modalShow, setModalShow] = React.useState(false);

    useEffect(() => {
        if (doctors == null)
            getDocs(collection(db, "DoctorRequests")).then((querySnapshot) => {
                // console.log(querySnapshot)
                var docs = []
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    // console.log(doc.id, " => ", doc.data());
                    // setDoctors([doc.data()]);
                    docs.push(doc.data())
                });
                // console.log(docs);
                setDoctors(docs);
            }).catch(e => alert(e));
    }, [])



    return (
        <div>
            {/* {data ? JSON.stringify(data) : "data not there"} */}
            <h2>Doctors list</h2>
            {/* {doctors && JSON.stringify(doctors)} */}
            {doctors && doctors.map(dat =>
                <center>          
                <Card style={{width:"50%",margin:"10%",textAlign:"left"}}>
                <Row>
                    <Col>
                <Card.Img variant="top" src={img} style={{width:300,height:300}} />
                    </Col>
                    <Col>
                    <Card.Body>
                    <div className = "Card-Text" style={{float: "right"}}>
                    <Card.Text style={{marginRight:"5em"}}>
                        <h2>Name : {dat.name}</h2>
                        <h2>degree : {dat.degree}</h2>
                        <br/><br/><br/>
                        <p>Specialization : {dat.spl}</p>
                        <p>Years of Experience : {dat.years}</p>
                    </Card.Text>
                    </div>
                    </Card.Body>
                    </Col>
                    <hr/>
                    <Button variant="primary" onClick={() => setModalShow(true)}>Get Appoinment</Button>

                    <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    />

                </Row>
                </Card>
                </center>  
            )}


            {/* {doctors && JSON.stringify(doctors)}
            {doctors && doctors.map(dat =>
                <div key={dat.email + dat.name}><p>{dat.email}</p>
                    <p>{dat.name}</p>
                </div>
            )} */}
        </div>
    )
}

export default PatientPage;
