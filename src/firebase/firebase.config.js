import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT.APP.apiKey,
  authDomain: process.env.REACT.APP.authDomain,
  projectId: process.env.REACT.APP.projectId,
  storageBucket: process.env.REACT.APP.storageBucket,
  messagingSenderId: process.env.REACT.APP.messagingSenderId,
  appId: process.env.REACT.APP.appId,
  measurementId: process.env.REACT.APP.measurementId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;