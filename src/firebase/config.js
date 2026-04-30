// src/firebase/config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDkBsTHt44pjUNCXYkuz4g6YmMURVkW2nc",
  authDomain: "gameshub-e10e9.firebaseapp.com",
  projectId: "gameshub-e10e9",
  storageBucket: "gameshub-e10e9.firebasestorage.app",
  messagingSenderId: "578161280155",
  appId: "1:578161280155:web:8fc3c2234f33add1fbf23e",
  measurementId: "G-P44839LQ6L"
};



const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);

export default app;
