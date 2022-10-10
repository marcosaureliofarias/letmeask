import firebase from "firebase/app";

import "firebase/auth";
import "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsUvPjMz45TwcK2ruT0beUCOLZh4QYNL4",
  authDomain: "letmeask-bad41.firebaseapp.com",
  databaseURL: "https://letmeask-bad41-default-rtdb.firebaseio.com",
  projectId: "letmeask-bad41",
  storageBucket: "letmeask-bad41.appspot.com",
  messagingSenderId: "215802106875",
  appId: "1:215802106875:web:aa1030adf493b69570715e",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database };
