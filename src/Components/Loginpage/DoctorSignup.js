import React from 'react'
import { Card } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { useState,useEffect } from "react";
import { collection, addDoc, setDoc, doc } from "firebase/firestore"; 
import { Button, Col, Row } from 'react-bootstrap';
import Signup from '../Loginpage/doctor-signup.png';
import {db} from './firebase';
function DoctorSignup() {

    const [name,setName]=useState("");
    const [degree,setDegree]=useState("");
    const [spl,setSpl]=useState("");
    const [reg,setReg]=useState("");
    const [years,setYears]=useState("");
    const [email,setEmail]=useState("");
    const [pwd,setPwd]=useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();

        // const coll = collection(db, "DoctorRequests") 
        setDoc(doc(db, "DoctorRequests", email),{
            name:name,
            degree:degree,
            spl:spl,
            reg:reg,
            years:years,
            email:email,
            pwd:pwd,
        })

        .then(()=>{
            alert("Request submitted successfully");
        })
        .catch(error=>{
            alert(error.message);
        });
        setName("");
        setPwd("");
        setEmail("");
        setReg("");
        setSpl("");
        setYears("");
        setDegree("");

    };
    return (
        <div>
            
        <div className="App">
        <center>
        <Card style={{ width: "30rem",marginTop:10 }}>

            <Card.Img variant="top" src={Signup} />

            <Card.Body>

            <Card.Title style={{ textAlign: "center" }}>Doctor Signup</Card.Title>
            <hr />
            <div>
                <Form.Floating className="mb-3"  >
                <Form.Control
                    id="floatingInputCustom"
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                />
                <label htmlFor="floatingInputCustom">Name</label>
                </Form.Floating>

                <Form.Floating className="mb-3" >
                <Form.Control
                    id="floatingInputCustom"
                    type="text"
                    placeholder="Degree"
                    value={degree}
                    onChange={(e)=>setDegree(e.target.value)}
                />
                <label htmlFor="floatingInputCustom">Degree</label>
                </Form.Floating>


                <Form.Floating className="mb-3" >
                <Form.Control
                    id="floatingInputCustom"
                    type="text"
                    placeholder="Specialization"
                    value={spl}
                    onChange={(e)=>setSpl(e.target.value)}
                />
                <label htmlFor="floatingInputCustom">Specialization</label>
                </Form.Floating>

                <Form.Floating className="mb-3" >
                <Form.Control
                    id="floatingInputCustom"
                    type="text"
                    placeholder="reg no"
                    value={reg}
                    onChange={(e)=>setReg(e.target.value)}
                />
                <label htmlFor="floatingInputCustom">Registration number </label>
                </Form.Floating>


                <Form.Floating className="mb-3" >
                <Form.Control
                    id="floatingInputCustom"
                    type="text"
                    placeholder="years of experience"
                    value={years}
                    onChange={(e)=>setYears(e.target.value)}
                />
                <label htmlFor="floatingInputCustom">Years of experience</label>
                </Form.Floating>

                <Form.Floating className="mb-3" >
                <Form.Control
                    id="floatingInputCustom"
                    type="email"
                    placeholder="xys@gmail.com"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <label htmlFor="floatingInputCustom">Email</label>
                </Form.Floating>

                <Form.Floating >
                <Form.Control
                    id="floatingPasswordCustom"
                    type="password"
                    placeholder="Password"
                    value={pwd}
                    onChange={(e)=>setPwd(e.target.value)}
                />
                <label htmlFor="floatingPasswordCustom">Password</label>

                <p className="justify-content-md-center" style={{ textAlign: "center", marginTop: "1em", marginBottom:"2em" }}>Already having account? <a href="doctor-login">Login</a></p> 

                <Row className="justify-content-md-center" >
                    
                    <Button variant="primary" type="submit" style={{width:"8em",marginBottom:10}}onClick={handleSubmit}>
                    Signup
                    </Button>
                    
                </Row>

                </Form.Floating>
            </div>

            </Card.Body>

        </Card>
        </center>   

    </div>  

        </div>
    )
}

export default DoctorSignup;