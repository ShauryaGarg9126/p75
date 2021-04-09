import firebase from 'firebase'
require("@firebase/firestore")

var firebaseConfig = {
  apiKey: "AIzaSyC5AWcT0l6SJsUngpkHETKmoIdnNeEhNQE",
  authDomain: "project-71-ea651.firebaseapp.com",
  databaseURL: "https://project-71-ea651-default-rtdb.firebaseio.com",
  projectId: "project-71-ea651",
  storageBucket: "project-71-ea651.appspot.com",
  messagingSenderId: "361303571130",
  appId: "1:361303571130:web:a2d4382a02ae1ac40f2083"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()                                   