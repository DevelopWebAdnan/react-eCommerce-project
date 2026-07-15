// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4GF9WWMYu9ZOXu_8ijdan9TdkAnklu2M",
  authDomain: "dimple-firebase-8aa1a.firebaseapp.com",
  projectId: "dimple-firebase-8aa1a",
  storageBucket: "dimple-firebase-8aa1a.firebasestorage.app",
  messagingSenderId: "1091043421299",
  appId: "1:1091043421299:web:3b5e91c920ea82dd9cce06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);