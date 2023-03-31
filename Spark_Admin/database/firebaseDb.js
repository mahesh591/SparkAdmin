
// database/firebaseDb.js
import * as firebase from 'firebase';
import firestore from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyBYcrjCaLS2lG-isIEiVUrlUh2sIQ0Ap5M",
    authDomain: "spark-testing-372706.firebaseapp.com",
    databaseURL: "https://spark-testing-372706.firebaseio.com",
    projectId: "spark-testing-372706",
    storageBucket: "spark-testing-372706.appspot.com",
    messagingSenderId: "180497422288",
    appId: "1:158669191484:web:87324e00980b77d6660639"
};
firebase.initializeApp(firebaseConfig);
firebase.firestore();
export default firebase;