// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDq7z_FyNi6xJqO-o6dgJaL92kyjXeUDY",
  authDomain: "current-abf8d.firebaseapp.com",
  projectId: "current-abf8d",
  storageBucket: "current-abf8d.appspot.com",
  messagingSenderId: "507906499523",
  appId: "1:507906499523:web:3bf0674a762d92ae615376",
  measurementId: "G-EY8QP7ZZRS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);