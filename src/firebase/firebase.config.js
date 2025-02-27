import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyA_gqbPFo3-TGE3p3NJVv8Q5a_JD7OixJM",
  authDomain: "hera-islamic-academy.firebaseapp.com",
  projectId: "hera-islamic-academy",
  storageBucket: "hera-islamic-academy.firebasestorage.app",
  messagingSenderId: "558158877187",
  appId: "1:558158877187:web:c9ca4e24f473bc34bab436",
  measurementId: "G-SMKZYZH6T2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;