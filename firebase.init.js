// src/firebase/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA3JkpwV352_iLcIkoyxpWErZFddcZy4qY",
    authDomain: "hospital-management-syst-dcf37.firebaseapp.com",
    projectId: "hospital-management-syst-dcf37",
    storageBucket: "hospital-management-syst-dcf37.appspot.com",
    messagingSenderId: "721672938094",
    appId: "1:721672938094:web:8dc2a195558de30639bc7f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);