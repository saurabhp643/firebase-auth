import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCLZv0uZxUh6_4OCKt7i2JtHmivyyMZQCg",
  authDomain: "auth-61124.firebaseapp.com",
  projectId: "auth-61124",
  storageBucket: "auth-61124.appspot.com",
  messagingSenderId: "462003553443",
  appId: "1:462003553443:web:2a55dc276ec4f8fa0c6b16",
  measurementId: "G-08BJ2YDN1P"
};
const firebaseapp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();
export { auth,googleProvider,facebookProvider};

