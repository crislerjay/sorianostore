// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAT1bQLrwfgSfp14VSgE83yRe5J5cUjCoo",
  authDomain: "sorianostore-dc9b3.firebaseapp.com",
  projectId: "sorianostore-dc9b3",
  storageBucket: "sorianostore-dc9b3.appspot.com",
  messagingSenderId: "823895931798",
  appId: "1:823895931798:web:0143b2e810d6be94127bb7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
