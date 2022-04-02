//config file

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


// write in your own firebase configurations.

  const firebaseApp = firebase.initializeApp({
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "acom",
    messagingSenderId: "66196",
    appId: "1:6699e9"
  });
  
  const db= firebaseApp.firestore();

  export default db;
