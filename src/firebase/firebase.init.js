// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2TUhTWCx83-9MlJBpX-uvnLvNuoPhCp8",
  authDomain: "assaignment-10-f25e0.firebaseapp.com",
  projectId: "assaignment-10-f25e0",
  storageBucket: "assaignment-10-f25e0.appspot.com",
  messagingSenderId: "442053843981",
  appId: "1:442053843981:web:04279156ef3a2e22d78944"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
export default auth;