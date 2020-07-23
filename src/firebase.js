import firebase from 'firebase/app';
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCSsgvC93NilFsaFcL3tQKyogG-czGGvbg",
    authDomain: "crud-react-3bc0b.firebaseapp.com",
    databaseURL: "https://crud-react-3bc0b.firebaseio.com",
    projectId: "crud-react-3bc0b",
    storageBucket: "crud-react-3bc0b.appspot.com",
    messagingSenderId: "985558079588",
    appId: "1:985558079588:web:e88678fdd28a0264e56771"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export {firebase}