import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyADgNBLn-LTh7q-UGFo0Ns5MWZrz_6eemA",
  authDomain: "playlist-vue-93426.firebaseapp.com",
  projectId: "playlist-vue-93426",
  storageBucket: "playlist-vue-93426.appspot.com",
  messagingSenderId: "598331300950",
  appId: "1:598331300950:web:e3778a5e85f54890cb6ff7",
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectAuth, timestamp };
