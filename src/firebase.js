import firebase from 'firebase/compat/app'; // Import only the 'app' module from firebase
import 'firebase/compat/auth'; // Import auth from the 'compat' version
import 'firebase/compat/firestore'; // Import firestore from the 'compat' version

const firebaseConfig = {
    apiKey: "AIzaSyAUpgpzx8hEymQ9VcxFIBCOXqE8kNawhbo",
    authDomain: "clone-50744.firebaseapp.com",
    projectId: "clone-50744",
    storageBucket: "clone-50744.appspot.com",
    messagingSenderId: "99786556327",
    appId: "1:99786556327:web:75785bfc9305e8e093ac82",
    measurementId: "G-P3W56CR79N"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { firebase, db, auth };
