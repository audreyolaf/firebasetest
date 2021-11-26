// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLNxNdYlHu9R7scPUit6cs5GXtOoRhw0E",
  authDomain: "fir-test-c3698.firebaseapp.com",
  projectId: "fir-test-c3698",
  storageBucket: "fir-test-c3698.appspot.com",
  messagingSenderId: "1038317592511",
  appId: "1:1038317592511:web:e3744a52ccf796495f4b0a",
  measurementId: "G-GBR5FYWZTJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default getFirestore();
