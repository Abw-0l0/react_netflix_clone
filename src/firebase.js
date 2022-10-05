// import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBcojo6g3m503qCdYI6s5kK0SYB2CUeMkY",
    authDomain: "netflix-clone-7aa3d.firebaseapp.com",
    projectId: "netflix-clone-7aa3d",
    storageBucket: "netflix-clone-7aa3d.appspot.com",
    messagingSenderId: "899433787279",
    appId: "1:899433787279:web:8dd8e67da86966b87365fa"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth};
  export default db;