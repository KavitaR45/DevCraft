import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfr3rRy5Vg_m_UzWl6xdDlJpVOroUIY7Q",
  authDomain: "fir-32be4.firebaseapp.com",
  projectId: "fir-32be4",
  storageBucket: "fir-32be4.appspot.com",
  messagingSenderId: "995116873843",
  appId: "1:995116873843:web:d0db05561e19bc9de91206",
  measurementId: "G-PNDQ83TQLX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore and Storage instances
export const db = getFirestore(app);
export const storage = getStorage(app);
