// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCEoVc1hfHLWAzS_wDAWxymWvKJAhLDBLE",
  authDomain: "otpverify-2ee90.firebaseapp.com",
  projectId: "otpverify-2ee90",
  storageBucket: "otpverify-2ee90.firebasestorage.app",
  messagingSenderId: "984398989606",
  appId: "1:984398989606:web:c9fc9ea2af16bd809199e7",
  measurementId: "G-Z5BVP4B3M9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);