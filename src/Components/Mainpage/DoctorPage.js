import React from 'react'
import { useState, useEffect } from 'react'
import { Navbar } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import logo from '../Homepage/logo.png'
import { collection, getDocs, setDoc, doc, addDoc } from "firebase/firestore";
import { db, app, useAuth, auth } from '../Loginpage/firebase';
import './Style.css';
import { Card } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";

import img from './Login.png'
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

function MyVerticallyCenteredModal(props) {
  const[name, setName] = useState("");
  const[age, setAge] = useState("");
  const[date,setDate]=useState("");
  const[strength,setStrength]=useState("");
  const[med,setMed]=useState("");
  const[medcond,setMedCond]=useState("");
  const[dose,setDose]=useState("");
  
  const user=auth.currentUser;
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(props);
    // signup(email, pwd).then(res => {
    //     console.log("Auth success")
        // console.log(res.user.uid);
        setDoc(doc(db, "Prescription", user.uid), {
            name: name,
            age:age,
            date:date,
            med:med,
            strength:strength,
            dose:dose,
            medcond:medcond,
            user:user.uid,
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
  
  const [doctors, setDoctors] = useState(null);
  const [modalShow, setModalShow] = React.useState(false);
  useEffect(() => {
    if (doctors == null)
      getDocs(collection(db, "Appointment")).then((querySnapshot) => {
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


  return(
 
    <div>
       <Navbar expand="lg" variant="dark" bg="dark">
        <Container>
          <Navbar.Brand href="#home"><img src={logo} style={{ width: "20%", float: "left" }}></img></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="prof-app">Upcoming Appointments</Nav.Link>

          </Nav>
        </Container>
      </Navbar>
      <br>
      </br><br/>
      <h2>Patient Requests</h2>
      <br></br>
      <br/>
    {doctors && doctors.map(dat =>
<>

<center>
  <Card border="primary" style={{ width: '30rem' }}>
    <Card.Header>Patient Name : {dat.name}                                                                                         <Button variant="secondary btn-sm" onClick={() => {
                   setModalShow(true)
              }}>Prescription</Button>    
              <MyVerticallyCenteredModal
                show={modalShow}
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
<a href="#" class="btn btn-success">Available</a>
<a href="#" class="btn btn-danger">Not Available</a>
</div>
  </Card>
  </center>
  <br />
  
  </>
  )}
  </div>)
}
export default DoctorPage;
// function MyVerticallyCenteredModal(props) {
//   const [doctor, setDoctor] = useState(null);
//   useEffect(() => {
//     if (doctor == null)
//       getDocs(collection(db, "Appointment")).then((querySnapshot) => {
//         // console.log(querySnapshot)
//         var docs = []
//         querySnapshot.forEach((doc) => {
//           // doc.data() is never undefined for query doc snapshots
//           // console.log(doc.id, " => ", doc.data());
//           // setDoctors([doc.data()]);
//           docs.push(doc.data())
//         });
//         // console.log(docs);
//         setDoctor(docs);
//       }).catch(e => alert(e));
//   }, [])
// return (
//   <div >
//   {doctor && doctor.map(dat =>
   
 
//   <Modal
//     {...props}
//     size="lg"
//     aria-labelledby="contained-modal-title-vcenter"
//     centered
//   >
    
//     <Modal.Header closeButton>
//       <Modal.Title id="contained-modal-title-vcenter">
//        Patient Details
//       </Modal.Title>
//     </Modal.Header>
//     <Modal.Body>
//       <h4>Patient Name : {dat.name}</h4>
//       <h4>Medical Condition : {dat.medcond}</h4>
//       <h5>Preferred Date of Appointment :{dat.prefdate}</h5>
//       <h5>Preferred Time of Appointment :{dat.preftime}</h5>
//     <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
//   <div class="modal-dialog" role="document">
//     <div class="modal-content">
//       <div class="modal-header">
//         <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
//         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//           <span aria-hidden="true">&times;</span>
//         </button>
//       </div>
//       <div class="modal-body">
//         ...
//       </div>
//       <div class="modal-footer">
//         <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
//         <button type="button" class="btn btn-primary">Save changes</button>
//       </div>
//     </div>
//   </div>
// </div>

    
    
//     </Modal.Body>
//     <Modal.Footer>
//       <Button onClick={props.onHide}>Close</Button>
//     </Modal.Footer>
   
//   </Modal>
//   )}

//   </div>
  
// )
// }

// function DoctorPage() {
//   const [modalShow, setModalShow] = React.useState(false);
//   const [doctors, setDoctors] = useState(null);
//   useEffect(() => {
    
//     if (doctors == null)
//       getDocs(collection(db, "Appointment")).then((querySnapshot) => {
//         // console.log(querySnapshot)
//         var docs = []
//         querySnapshot.forEach((doc) => {
//           // doc.data() is never undefined for query doc snapshots
//           // console.log(doc.id, " => ", doc.data());
//           // setDoctors([doc.data()]);
//           docs.push(doc.data())
//         });
//         // console.log(docs);
//         setDoctors(docs);
//       }).catch(e => alert(e));
//   }, [])
//   return (
//     <div>
//     {doctors && doctors.map(dat =>
//       <center>
// <div className="row">
// {
//     /* moviedata.map((data, index) => { */
//         //console.log(data.image);
//         <div className="col-4"  style={{ marginLeft: "auto", marginRight: "auto" }}>
//             <div className="card">
//                 <div className="card-img-top img-fluid">
//                     <img src={img} style={{ width: '18rem', height: '20rem' }} />
//                 </div>
//                 <h1>Name :{dat.name}</h1>
//                 <Button variant="primary" onClick={() => {
//                   setModalShow(true)
//                 }}>View Details</Button>
//               <hr/>
//               <MyVerticallyCenteredModal
//                 show={modalShow}
                
//                 onHide={() => setModalShow(false)}
//               />
              
              
//            <div>


// 	<Button class="btn btn-primary" id="button1">Available</Button>
// 	<Button class="btn btn-primary ml-4" id="button2">Not available</Button>
// </div>
           
//         </div>
           
//         </div>
// })
// </div>
// </center>
//     )}
//     </div>
//   )}

