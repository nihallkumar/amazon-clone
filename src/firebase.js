import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAxG2Iw1lodIfp_dhNop_2AKKpYbknxBDI",
  authDomain: "clone-cb63d.firebaseapp.com",
  projectId: "clone-cb63d",
  storageBucket: "clone-cb63d.appspot.com",
  messagingSenderId: "32493321260",
  appId: "1:32493321260:web:ff17adf9d7618f2507e589",
  measurementId: "G-BYW05NC6H3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db , auth};