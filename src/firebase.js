import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCnsc0zIKmrx-rqwkFliTS23YgUU9LzBTo",
  authDomain: "keeper-b6200.firebaseapp.com",
  projectId: "keeper-b6200",
  storageBucket: "keeper-b6200.appspot.com",
  messagingSenderId: "1059979314401",
  appId: "1:1059979314401:web:1e19f39e689c778812e3a0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };