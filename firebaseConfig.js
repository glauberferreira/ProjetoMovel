// Import the functions you need from the SDKs you need
import { initializeApp, signInWithEmailAndPassword } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpeIiYt3BSKBrhRAOf11_FzNf55AFgPZ0",
  authDomain: "programacao-movel-tarde.firebaseapp.com",
  projectId: "programacao-movel-tarde",
  storageBucket: "programacao-movel-tarde.appspot.com",
  messagingSenderId: "727603664468",
  appId: "1:727603664468:web:663e3c4435600dce34bfc1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };