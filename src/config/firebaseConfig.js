import firebase from 'firebase'
import 'firebase/storage';



  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDiTV3oG_uZvxAcC-DUHa6SBsciSeod6WY",
    authDomain: "tshirt-e202b.firebaseapp.com",
    projectId: "tshirt-e202b",
    storageBucket: "tshirt-e202b.appspot.com",
    messagingSenderId: "692456824599",
    appId: "1:692456824599:web:88e565e5417b776f8c2152",
    measurementId: "G-NPNMTBSX54"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


   const storage = firebase.storage();

   export {
       storage, firebase as default
   }

