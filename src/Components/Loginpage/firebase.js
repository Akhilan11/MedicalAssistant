// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { useState, useEffect } from "react";

import firebase from "firebase/compat/app";
import "firebase/auth";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyB3012ISAqlxzaswq-f8MbJWUSLgJlT-lg",
    authDomain: "auth-tutorial-5586f.firebaseapp.com",
    databaseURL: "https://auth-tutorial-5586f-default-rtdb.firebaseio.com",
    projectId: "auth-tutorial-5586f",
    storageBucket: "auth-tutorial-5586f.appspot.com",
    messagingSenderId: "283970077426",
    appId: "1:283970077426:web:28f11c0bcd1d7378ca066b",
    measurementId: "G-HGKPM7LXQX"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);
export { db, app, auth };
export function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
}

export function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password).then(val=>{
        console.log(val.user.uid)
        localStorage.setItem("uid",val.user.uid);
        return val.user.uid;
    })
}


export function logout() {
    return signOut(auth);
}

export function getUser(){
    return auth.currentUser
}

export function useAuth() {
    const [currentUser, setCurrentUser] = useState();
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
            // setLoading(false);
        });
        return unsubscribe;
    }, [currentUser]);
}