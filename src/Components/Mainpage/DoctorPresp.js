import { getApps } from '@firebase/app';
import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { db,app,auth, useAuth } from '../Loginpage/firebase';
import { collection, getDocs,query, where,getDoc} from "firebase/firestore";
import firebase from '@firebase/app';
require('firebase/auth');
console.log(auth);
function DoctorPresp() {
    // useEffect(() => {
    //     getDocs(collection(db,"Appointments")).then((snapshot) => snapshot.forEach(ele => {
    //         const data = ele.data();
    //         setuserbookings(arr => [...arr, { data: data }]);
    //          console.log(data);
    //     }))
    // }, [])
   // console.log(userbookings);
   const user=auth.currentUser;
  // const q = query(collection(db, "Appointments"),where("user","==", user.uid));
   const [hospitalDetails, setHospitalDetails] = useState([]);
   useEffect(() => { 
    const hospitals1=[]
    const uid = localStorage.getItem("uid")
    const getDocuments = async () => {
    // e.preventDefault();
    const q = query(collection(db, "Prescription"),where("patient","==", uid));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((hospital) => {
        // doc.data() is never undefined for query doc snapshots
      //  console.log(doc.id, " => ", doc.data());
        let appObj = { ...hospital.data()}
        hospitals1.push(appObj)
       // hospitals.push(hospital)
},)
    setHospitalDetails(hospitals1);
    }
    getDocuments();
  }, [])
    return (
        
            <div className="main-panel">
                <nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top ">
                    <div class="container-fluid">
                        <div class="navbar-wrapper">

                        </div>
                        <button class="navbar-toggler" id="table-nav" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="navbar-toggler-icon icon-bar"></span>
                            <span class="navbar-toggler-icon icon-bar"></span>
                            <span class="navbar-toggler-icon icon-bar"></span>
                        </button>
                    </div>
                </nav>
                <div className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header card-header-primary">
                                        <h4 className="card-title">Prescription</h4>
                                        <p className="card-category" id="card-category">Doctor Prescriptions appear here</p>
                                    </div>
                                    <div className="card-body" id="movie-table-card">
                                        <div className="table-responsive" id="movie-table">
                                            <table className="table">
                                                <thead className=" text-primary">
                                                    <th>
                                                        DoctorName
                                                    </th>
                                                    <th>
                                                        Date
                                                    </th>
                                                    <th>
                                                        Medical Condition
                                                    </th>
                                                    <th>
                                                        Medication
                                                    </th>
                                                    <th>
                                                        Strength
                                                    </th>
                                                    <th>
                                                        Dose
                                                    </th>
                                                </thead>
                                                <tbody>
                                                    {
                                                        
                                                        hospitalDetails.map((data, index) => {
                                                            return <tr key={index}>
                                                                 {/* <td>
                                                                    {data.data.name}
                                                                </td>
                                                                <td>
                                                                    {data.data.email}
                                                                </td>
                                                                <td>
                                                                    {data.data.dob}
                                                                </td>
                                                                <td>
                                                                    {data.data.bldgrp}
                                                                </td>
                                                                <td>
                                                                    {data.data.age}
                                                                </td>
                                                                <td>
                                                                    {data.data.phoneno}
                                                                </td>
                                                                <td>
                                                                    {data.data.address}
                                                                </td>
                                                                <td>
                                                                    {data.data.medcond}
                                                                </td>
                                                                <td>
                                                                    {data.data.allergy}
                                                                </td>
                                                                <td>
                                                                    {data.data.prefdate}
                                                                </td>
                                                                <td>
                                                                    {data.data.preftime}
                                                                </td>    */}
                                                                <td>
                                                                    {data.doctorName}
                                                                </td>
                                                                <td>
                                                                    {data.date}
                                                                </td>
                                                                <td>
                                                                    {data.medcond}
                                                                </td>
                                                                <td>
                                                                    {data.med}
                                                                </td>
                                                                <td>
                                                                    {data.strength}
                                                                </td>
                                                                <td>
                                                                    {data.dose}
                                                                </td>
                                                            </tr>
                                                        })
                                                    }
                                                
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default DoctorPresp;