import * as fb from "firebase/app";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBYcrjCaLS2lG-isIEiVUrlUh2sIQ0Ap5M",
    authDomain: "spark-testing-372706.firebaseapp.com",
    projectId: "spark-testing-372706",
    storageBucket: "spark-testing-372706.appspot.com",
    messagingSenderId: "180497422288",
    appId: "1:180497422288:web:8f39eceff15c5a89028bd5"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const firestore = getFirestore(app);
  export const storage = getStorage(app);
  export const fireb = fb;