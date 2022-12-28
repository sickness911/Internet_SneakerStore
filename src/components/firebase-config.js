import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import {getDatabase} from "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyBhmEgxo20D1zaSl9XxQTNpbtH3JJs9k7U",
    authDomain: "mproject-6e240.firebaseapp.com",
    databaseURL: "https://mproject-6e240-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "mproject-6e240",
    storageBucket: "mproject-6e240.appspot.com",
    messagingSenderId: "206011890479",
    appId: "1:206011890479:web:e504852b1d4984118e7fda",
    measurementId: "G-EY6EC7251P"
};

const app = initializeApp(firebaseConfig);
export const confirmation = getAuth(app);
export const db = getDatabase(app);