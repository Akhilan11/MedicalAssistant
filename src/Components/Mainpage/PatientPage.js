import React, { useState, useEffect } from 'react'

import { collection, getDocs } from "firebase/firestore";
import { db } from '../Loginpage/firebase';

import { Card } from "react-bootstrap";
import { Col,Row } from "react-bootstrap";

import img from './Login.png'



function PatientPage() {
    const [doctors, setDoctors] = useState(null);
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
                    <hr     />
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
