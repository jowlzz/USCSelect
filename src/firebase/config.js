// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASqDURLGod9tiXJbmNXlICWf-c_XdIzB4",
  authDomain: "e-vote-ph.firebaseapp.com",
  projectId: "e-vote-ph",
  storageBucket: "e-vote-ph.appspot.com",
  messagingSenderId: "793026656624",
  appId: "1:793026656624:web:92706ef878f9e8760e37b5",
  measurementId: "G-W7J4L4HN0W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);