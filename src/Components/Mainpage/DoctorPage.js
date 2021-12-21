import React from 'react'
import { useState, useEffect } from 'react'
import { Navbar } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import logo from '../Homepage/logo.png'
import { collection, getDocs, setDoc, query, where, doc, addDoc } from "firebase/firestore";
import { db, app, useAuth, auth } from '../Loginpage/firebase';
import './Style.css';
import { Card } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import img from './Login.png'
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import  firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
let firebaseConfig = {
    apiKey: "AIzaSyB3012ISAqlxzaswq-f8MbJWUSLgJlT-lg",
    authDomain: "auth-tutorial-5586f.firebaseapp.com",
    databaseURL: "https://auth-tutorial-5586f-default-rtdb.firebaseio.com",
    projectId: "auth-tutorial-5586f",
    storageBucket: "auth-tutorial-5586f.appspot.com",
    messagingSenderId: "283970077426",
    appId: "1:283970077426:web:28f11c0bcd1d7378ca066b",
    measurementId: "G-HGKPM7LXQX"
};
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
const db1 = firebase.firestore();
function MyVerticallyCenteredModal(props) {
  const[name, setName] = useState("");
  const[age, setAge] = useState("");
  const[date,setDate]=useState("");
  const[strength,setStrength]=useState("");
  const[med,setMed]=useState("");
  const[medcond,setMedCond]=useState("");
  const[dose,setDose]=useState("");
  // console.log(props.patient)
  const user=auth.currentUser;
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(props);
    // signup(email, pwd).then(res => {
    //     console.log("Auth success")
        // console.log(res.user.uid);
        setDoc(doc(db, "Prescription", user.uid+" "+props.id), {
            name: name,
            age:age,
            date:date,
            med:med,
            strength:strength,
            dose:dose,
            medcond:medcond,
            user:user.uid,
            patient:props.patient
        }).then(() => {
                alert("Prescription sent successfully");
            })
            .catch(error => {
                alert(error.message);
            });
       setName("");
       setDate("");
       setAge("");
       setMed("");
       setMedCond("");
       setStrength("");
       setDose("");
    // const coll = collection(db, "DoctorRequests") 
};
  // const uid = useAuth();
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Prescription
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Patient Name</Form.Label>
              <Form.Control type="name" placeholder="Enter Name" value={name}
                onChange={(e) => setName(e.target.value)} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridAge">
              <Form.Label>Age</Form.Label>
              <Form.Control type="number" placeholder="Enter Age" value={age}
                onChange={(e) => setAge(e.target.value)} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridDate">
              <Form.Label>Date</Form.Label>
              <Form.Control type="text" placeholder="Enter Date" value={date}
                onChange={(e) => setDate(e.target.value)} />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridMedicines">
            <Form.Label>Medical Condition of Patient</Form.Label>
            <Form.Control placeholder="Medical condition" value={medcond}
              onChange={(e) => setMedCond(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridMedicines">
            <Form.Label>Medication</Form.Label>
            <Form.Control placeholder="Medicines" value={med}
              onChange={(e) => setMed(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridStrength">
            <Form.Label>Strength</Form.Label>
            <Form.Control placeholder="Strength" value={strength}
              onChange={(e) => setStrength(e.target.value)} />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridDose">
              <Form.Label>Dose</Form.Label>
              <Form.Control placeholder="Dose in number" value={dose}
                onChange={(e) => setDose(e.target.value)} />
            </Form.Group>
          </Row>

          <hr style={{ marginTop: "2em" }} />

          
          <center>
            <Button variant="primary" type="submit" style={{ marginTop: "2em" }} onClick={handleSubmit}>
              Send
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

function DoctorPage(){
  const [modalShow, setModalShow] = React.useState(false);
  const uid = localStorage.getItem("uid")
  const [hospitalsDetails, setHospitalsDetails] = useState([]);
  const q = query(collection(db, "Appointment"), where("doctor", "==", uid));
  console.log(q);
  useEffect(() => {
       const hospitals = []
      const getDocuments = async () => {
          // e.preventDefault();
          // const q = query(collection(db, "Appointment"));
          const querySnapshot = await getDocs(q);
          querySnapshot.forEach((hospital) => {
              // doc.data() is never undefined for query doc snapshots
              //  console.log(doc.id, " => ", doc.data());
              let appObj = { ...hospital.data() }
              hospitals.push(appObj)
              // hospitals.push(hospital)
          })
          setHospitalsDetails(hospitals);
      }
      getDocuments();
  }, []);
  return(
    <div>
       <Navbar expand="lg" variant="dark" bg="dark">
        <Container>
          <Navbar.Brand href="#home"><img src={logo} style={{ width: "20%", float: "left" }}></img></Navbar.Brand>
          {/* <Nav className="me-auto">
            <Nav.Link href="prof-app">Upcoming Appointments</Nav.Link>
          </Nav> */}
        </Container>
      </Navbar>
      <br>
      </br><br/>
      <h2>Patient Requests</h2>
      <br></br>
      <br/>
    {hospitalsDetails && hospitalsDetails.map(dat =>
    {
      console.log(dat.user)
      const handleDelete = (e) => {
            var deletePatient = db1.collection('Appointment').where('user','==',dat.user);
            deletePatient.get().then(function(querySnapshot) {
              querySnapshot.forEach(function(doc) {
                doc.ref.delete();
              });
            });
          }
      return(
        <div key={dat.user+dat.doctor}>
        <center>
          <Card border="primary" style={{ width: '30rem' }}>
            <Card.Header>Patient Name : {dat.name}                                                                                         
            <Button variant="secondary btn-sm" onClick={() => {
                          setModalShow(true)
                      }}>Prescription</Button>    
                      <MyVerticallyCenteredModal
                        show={modalShow}
                        patient={dat.user}
                        onHide={() => setModalShow(false)}
                      />
            </Card.Header>
            <Card.Body>
              <Card.Title>Medical Condition : {dat.medcond}</Card.Title>
              <Card.Text>
                <h5>Preferred Date : {dat.prefdate}</h5>
                <h5>Preferred Time : {dat.preftime}</h5>
                {/* Some quick example text to build on the card title and make up the bulk
                of the card's content. */}
              </Card.Text>
            </Card.Body>
            <div class="btn-group">
        <a href="video-chat" class="btn btn-success">Available</a>
        <a href="#" class="btn btn-danger" onClick={handleDelete}>Not Available</a>
        </div>
          </Card>
          </center>
          <br />
          </div>
      )}
  )}
  </div>)
}
export default DoctorPage;
