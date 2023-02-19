// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCsrXxzV6vHCY8YHWiXr5WYa4MKfRxK7gk",
    authDomain: "female-period-support.firebaseapp.com",
    databaseURL: "https://female-period-support-default-rtdb.firebaseio.com",
    projectId: "female-period-support",
    storageBucket: "female-period-support.appspot.com",
    messagingSenderId: "835569282",
    appId: "1:835569282:web:0d17dedadb15f51b0e169b",
    measurementId: "G-0LKHG4JS8D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);