import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const Config = {
    apiKey: "AIzaSyCO-qbJ7TSJGFSuMsJTrqsHaaHNsT-EPbw",
    authDomain: "flipkart-clone-9075b.firebaseapp.com",
    projectId: "flipkart-clone-9075b",
    storageBucket: "flipkart-clone-9075b.appspot.com",
    messagingSenderId: "394915603334",
    appId: "1:394915603334:web:7d6f79e2f18d755d6ec207",
    measurementId: "G-JD58P1L7XB"
};
  
firebase.initializeApp(Config);
export const auth = firebase.auth()
export const firestore = firebase.firestore()
const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider)
export default firebase;

