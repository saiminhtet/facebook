import firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAfTUlaOcUru2P9ohGpOdWshjhjlldE4s8",
    authDomain: "facebook-2-yt-4c82e.firebaseapp.com",
    projectId: "facebook-2-yt-4c82e",
    storageBucket: "facebook-2-yt-4c82e.appspot.com",
    messagingSenderId: "727856553284",
    appId: "1:727856553284:web:7f9e126a2887c685364b11"
  };

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };