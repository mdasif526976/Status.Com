// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.api_key,
  authDomain: process.env.auth_domain,
  projectId: process.env.project_id,
  storageBucket: process.env.s_buket,
  messagingSenderId: process.env.m_sender_id,
  appId: process.env.appId
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export default app;