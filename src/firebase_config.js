import firebase from "firebase/app";
import "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdV3B5r68jV-Nf26xqM86TaronOgl70l8",
  authDomain: "crop-prediction-lbs.firebaseapp.com",
  projectId: "crop-prediction-lbs",
  storageBucket: "crop-prediction-lbs.appspot.com",
  messagingSenderId: "586514182323",
  appId: "1:586514182323:web:7bc7046729eed9a36940c6",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
// const auth = firebase.auth;
// const storage = firebase.storage();

export { db };