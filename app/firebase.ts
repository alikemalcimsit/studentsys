// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import firebase from 'firebase/compat/app';
import firebaseClient from "firebase/app"
import 'firebase/compat/firestore'; // Firestore'u import edin

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBm2kvj7NwBTu4sGOwdGIgyaHPD5u0tEro",
  authDomain: "studentsys-6f1dd.firebaseapp.com",
  projectId: "studentsys-6f1dd",
  storageBucket: "studentsys-6f1dd.appspot.com",
  messagingSenderId: "860882784124",
  appId: "1:860882784124:web:3f19aeb4a50235b3971ef9",
  measurementId: "G-6SSWW8F5RZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);


