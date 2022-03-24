// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "@firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAnrgnmlEXvh_Arn_QA050uOcxAbc8LpA",
  authDomain: "notebook-web-d9d5f.firebaseapp.com",
  projectId: "notebook-web-d9d5f",
  storageBucket: "notebook-web-d9d5f.appspot.com",
  messagingSenderId: "708512892676",
  appId: "1:708512892676:web:a6653b733753b40833f251"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };