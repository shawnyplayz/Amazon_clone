import firebase from "firebase";

const firebaseConfig = {
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: "AIzaSyAsd-iKKorPdiJu1xWmo185UcGDVI3FOlM",
    authDomain: "clone-33c14.firebaseapp.com",
    projectId: "clone-33c14",
    storageBucket: "clone-33c14.appspot.com",
    messagingSenderId: "828770887904",
    appId: "1:828770887904:web:a75b80b7fe33eefb59c885",
    measurementId: "G-79SF9NSNVD"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };