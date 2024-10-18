import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbmXFiNuV7o-QIFFhi9fgGOVWPRpI6USk",
  authDomain: "feedback-c8fcc.firebaseapp.com",
  databaseURL: "https://feedback-c8fcc-default-rtdb.firebaseio.com",
  projectId: "feedback-c8fcc",
  storageBucket: "feedback-c8fcc.appspot.com",
  messagingSenderId: "610667114863",
  appId: "1:610667114863:web:73452ca5a0f89563e1789a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
