// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_vxGF-_mM-823R0paaSbq0UjCxvRB8Mo",
  authDomain: "vite-contant-6d8e2.firebaseapp.com",
  projectId: "vite-contant-6d8e2",
  storageBucket: "vite-contant-6d8e2.appspot.com",
  messagingSenderId: "813942445543",
  appId: "1:813942445543:web:feb35254c35c0681b35942",
  measurementId: "G-WCLS4QY5TH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);