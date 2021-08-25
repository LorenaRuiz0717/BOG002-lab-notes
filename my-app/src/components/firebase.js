import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyDBvrvPYAnowzNqjIlPsFlTCKWPrkmCJ_0",
    authDomain: "school-notes-e4b02.firebaseapp.com",
    projectId: "school-notes-e4b02",
    storageBucket: "school-notes-e4b02.appspot.com",
    messagingSenderId: "569436701774",
    appId: "1:569436701774:web:7c3c38dc3aa9ebbfee2f1f",
    measurementId: "G-NP7E516WH7"
  };
  // Initialize Firebase
  const fire=firebase.initializeApp(firebaseConfig);
  export const db=fire.firestore();
  export const googleProvider = new firebase.auth.GoogleAuthProvider();
  
  export default fire;