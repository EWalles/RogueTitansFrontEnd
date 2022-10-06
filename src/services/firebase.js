import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCsqyRRz7L-DfKCcNu4ppki6Q6RllyUKzc",
    authDomain: "rogouetitan.firebaseapp.com",
    projectId: "rogouetitan",
    storageBucket: "rogouetitan.appspot.com",
    messagingSenderId: "148854565736",
    appId: "1:148854565736:web:2f658574713c429a8384dd"
  };


  //Initialize the firebase app
  firebase.initializeApp(firebaseConfig);

  //Set up our provider for google signin
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider()

  //Define login and logout actions
  function login(){
    return auth.signInWithPopup(provider);
  }
  function logout(){
    return auth.signOut();
  }
  // Export functionality

  export {
    login,
    logout,
    auth
  }