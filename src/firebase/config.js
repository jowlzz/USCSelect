import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyASqDURLGod9tiXJbmNXlICWf-c_XdIzB4",
    authDomain: "e-vote-ph.firebaseapp.com",
    projectId: "e-vote-ph",
    storageBucket: "e-vote-ph.appspot.com",
    messagingSenderId: "793026656624",
    appId: "1:793026656624:web:92706ef878f9e8760e37b5",
    measurementId: "G-W7J4L4HN0W",
};

const app = initializeApp(firebaseConfig);

export const Auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app)