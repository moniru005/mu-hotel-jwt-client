// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBafk8xZHy858vQIF9eWy2RV65lJDQJqc4",
  authDomain: "hotel-jwt-client.firebaseapp.com",
  projectId: "hotel-jwt-client",
  storageBucket: "hotel-jwt-client.appspot.com",
  messagingSenderId: "997138108092",
  appId: "1:997138108092:web:db3e7c6e3bc8cfc5818ab9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;