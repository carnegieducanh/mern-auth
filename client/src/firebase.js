// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mearn-auth-build-deploy.firebaseapp.com",
  projectId: "mearn-auth-build-deploy",
  storageBucket: "mearn-auth-build-deploy.firebasestorage.app",
  messagingSenderId: "388569780660",
  appId: "1:388569780660:web:4d16fcc3d47b59e25862e1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
