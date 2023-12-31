import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; // Import the Firestore module

const firebaseConfig = {
  apiKey: "AIzaSyCAlkRCZ4lvLRnhYnliTZ5fx02tLuzCjHI",
  authDomain: "pomodoro-48ae2.firebaseapp.com",
  projectId: "pomodoro-48ae2",
  storageBucket: "pomodoro-48ae2.appspot.com",
  messagingSenderId: "1058300316091",
  appId: "1:1058300316091:web:677a68d90b560926071c9e",
  measurementId: "G-QEKVTLRVSB"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp); // Initialize Firestore

export { auth, firebaseApp, firestore }; // Export the auth, firebaseApp, and firestore objects
