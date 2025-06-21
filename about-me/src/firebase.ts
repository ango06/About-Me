// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics"; // Google Analytics?
import { getFirestore } from "firebase/firestore";

// About Me's Firebase project configuration
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNaQQIjsPUXh3oG6LbGKZV65_XnEeqRA8",
  authDomain: "about-me-e21b5.firebaseapp.com",
  projectId: "about-me-e21b5",
  storageBucket: "about-me-e21b5.firebasestorage.app",
  messagingSenderId: "787378759789",
  appId: "1:787378759789:web:7193984fea460f7f937764",
  measurementId: "G-87Z2JC3MYW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);