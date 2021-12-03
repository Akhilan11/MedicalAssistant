import React, { useState, useEffect } from 'react'
import { Navbar } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import logo from '../Homepage/logo.png'
import { collection, getDocs , setDoc, doc} from "firebase/firestore";
import { db,app,useAuth,auth } from '../Loginpage/firebase';

import { Card } from "react-bootstrap";
import { Col,Row } from "react-bootstrap";

import img from './Login.png'
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';


import { Form } from 'react-bootstrap';


function MyVerticallyCenteredModal(props) {
  // const uid = useAuth();
  const [name,setName]=useState("");
  const[email,setEmail]=useState("");
  const [dob,setdob]=useState("");
  const[age,setAge]=useState("");
  const[bldgrp,setBldgrp]=useState("");
  const[phoneno,setPhoneno]=useState("");
  const [address,setAddress]=useState("");
  const [address2,setAddress2]=useState("");
  const[city,setCity]=useState("");
  const[state,setState]=useState("");
  const[zip,setZip]=useState("");
  const[medcond,setMedcond]=useState("");
  const[allergy,setAllergy]=useState("");
  const[prefdate,setPrefdate]=useState("");
  const[preftime,setPreftime]=useState("");
 const user=auth.currentUser;
  const handleSubmitAppt=(e)=>{
    e.preventDefault();
    // const coll = collection(db, "DoctorRequests") 
    setDoc(doc(db, "Appointments",user.uid),{
        name:name,
        medcond:medcond,
        prefdate:prefdate,
        preftime:preftime,
        email:email,
        bldgrp:bldgrp,
        dob:dob,
        age:age,
        phoneno:phoneno,
     zip:zip,
     address:address,
     address2:address2,
     allergy:allergy,
     state:state,
     city:city,
     user:user.uid
     
    })

    .then(()=>{
        alert("Appointment submitted successfully");
    })
    .catch(error=>{
        alert(error.message);
    });
    setName("");
    setEmail("");
    setAllergy("");
    setMedcond("");
    setAddress("");
    setAddress2("");
    setCity("");
    setPhoneno("");
    setZip("");
    setdob("");
    setState("");
setAge("");
setBldgrp("");
setPrefdate("");
setPreftime("");
};
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
            <Form.Control type="email" placeholder="Enter Name" value={name}
                    onChange={(e)=>setName(e.target.value)} />
          </Form.Group>
  
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email}
                    onChange={(e)=>setEmail(e.target.value)} />
          </Form.Group>
        </Row>
  
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>D.O.B</Form.Label>
            <Form.Control type="text" placeholder="DD-MM-YYYY" value={dob}
                    onChange={(e)=>setdob(e.target.value)}/>
          </Form.Group>
  
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Blood Group</Form.Label>
            <Form.Control type="text" placeholder="Enter Blood Group" value={bldgrp}
                    onChange={(e)=>setBldgrp(e.target.value)} />
          </Form.Group>
  
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Age</Form.Label>
            <Form.Control type="number" placeholder="Enter Age" value={age}
                    onChange={(e)=>setAge(e.target.value)} />
          </Form.Group>
  
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="text" placeholder="Enter PhoneNumber" value={phoneno}
                    onChange={(e)=>setPhoneno(e.target.value)}/>
          </Form.Group>
        </Row>
  
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" value={address}
                    onChange={(e)=>setAddress(e.target.value)} />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control placeholder="Apartment, studio, or floor" value={address2}
                    onChange={(e)=>setAddress2(e.target.value)} />
        </Form.Group>
  
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control placeholder="City" value={city}
                    onChange={(e)=>setCity(e.target.value)}/>
          </Form.Group>
  
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Control placeholder="State" value={state}
                    onChange={(e)=>setState(e.target.value)}/>
          </Form.Group>
  
          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control placeholder="Zip Code" value={zip}
                    onChange={(e)=>setZip(e.target.value)}/>
          </Form.Group>
        </Row>
  
        <hr style={{marginTop:"2em"}}/>
  
        <Row className="mb-3">
        
        <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
          <Form.Label>Medical Condition / History</Form.Label>
          <Form.Control as="textarea" rows={3} value={medcond}
                    onChange={(e)=>setMedcond(e.target.value)} />
        </Form.Group>
  
        <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
          <Form.Label>Allergy</Form.Label>
          <Form.Control as="textarea" rows={3} value={allergy}
                    onChange={(e)=>setAllergy(e.target.value)} />
        </Form.Group>
        
        </Row>
  
        <Row className="mb-3">
        
        <p>Appoinment</p>
  
        <Form.Group as={Col} controlId="formGridZip">
            {/* <Form.Label>Appoinment</Form.Label> */}
            <Form.Control placeholder="Preferred Date" value={prefdate}
                    onChange={(e)=>setPrefdate(e.target.value)}/>
        </Form.Group>
  
        <Form.Group as={Col} controlId="formGridZip">
            <Form.Control placeholder="Preferred Time" value={preftime}
                    onChange={(e)=>setPreftime(e.target.value)}/>
        </Form.Group>
  
        </Row>
  
        <center>
        <Button variant="primary" type="submit" style={{marginTop:"2em"}} onClick={handleSubmitAppt}>
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
           <Navbar  expand="lg" variant="dark" bg="dark">
      <Container>
      <Navbar.Brand href="#home"><img src={ logo } style = {{width:"20%",float:"left"}}></img></Navbar.Brand>
      <Nav className="me-auto">
      <Nav.Link href="prof-app">Appointments</Nav.Link>
      
      </Nav>
      </Container>
  </Navbar>
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
