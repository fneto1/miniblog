// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEB3hiaqTRkoDy0os6_F7sP8kdOPMUags",
  authDomain: "miniblog-91849.firebaseapp.com",
  projectId: "miniblog-91849",
  storageBucket: "miniblog-91849.appspot.com",
  messagingSenderId: "99284231207",
  appId: "1:99284231207:web:c333c38f0010f3345f9a02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }