// Import the necessary functions from Firebase SDKs
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLuvqXyRjvy0Qpz4G_AYerGzv0hmdbyDc",
  authDomain: "candc-4ba2c.firebaseapp.com",
  projectId: "candc-4ba2c",
  storageBucket: "candc-4ba2c.appspot.com",
  messagingSenderId: "122950111834",
  appId: "1:122950111834:web:ea21ddd788ec8620f13e63",
  measurementId: "G-HPZTJKMVDP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const db = getFirestore(app);    // Firestore database
const auth = getAuth(app);       // Firebase Authentication
const analytics = getAnalytics(app);  // Firebase Analytics

// Export the initialized services for use in other files
export { db, auth, analytics };
