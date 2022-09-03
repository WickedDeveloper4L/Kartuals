import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const config = {
    apiKey: "AIzaSyC85pWs7E7XL8ztkIN1Q6wcuRRlTdtNUxs",
    authDomain: "kartuals-db.firebaseapp.com",
    projectId: "kartuals-db",
    storageBucket: "kartuals-db.appspot.com",
    messagingSenderId: "919242701174",
    appId: "1:919242701174:web:0287444e0449e3dcea2257",
    measurementId: "G-3K1HG5W5MC"
};

  firebase.initializeApp(config);


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle =()=> auth.signInWithPopup(provider);

  export default firebase;