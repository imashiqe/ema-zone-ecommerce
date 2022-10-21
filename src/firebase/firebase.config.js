// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPYd3mPPeT0IXRb65w8TD3t7HiFfSh300",
  authDomain: "ema-zone-commerce.firebaseapp.com",
  projectId: "ema-zone-commerce",
  storageBucket: "ema-zone-commerce.appspot.com",
  messagingSenderId: "471929391233",
  appId: "1:471929391233:web:b5132185b7d11435816580"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;