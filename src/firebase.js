//config file

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


// write in your own firebase configurations.

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDv0d7uKAyrHui2ueybOnn5Sd8vxNuZ3V8",
    authDomain: "facebook-messenger-clone-fb01b.firebaseapp.com",
    projectId: "facebook-messenger-clone-fb01b",
    storageBucket: "facebook-messenger-clone-fb01b.appspot.com",
    messagingSenderId: "668702949196",
    appId: "1:668702949196:web:9c21d53a21863cbc6399e9"
  });
  
  const db= firebaseApp.firestore();

  export default db;