import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Use environment variables from .env file

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_ID,
  appId:process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
}

export default firebaseConfig;

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app); // Export Firestore instance
