// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLZ-FqTItnlx6CcO5WJ5AOmcXBjlOULGM",
  authDomain: "on-the-spot-6b018.firebaseapp.com",
  projectId: "on-the-spot-6b018",
  storageBucket: "on-the-spot-6b018.appspot.com",
  messagingSenderId: "372387820443",
  appId: "1:372387820443:web:77e3e0a934b108c72fe73e",
  measurementId: "G-1TNJMGGGNM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
