import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDbpJBS10i9MzTyqeqcKX4jCMlqV9ioX50",
  authDomain: "chat-af425.firebaseapp.com",
  projectId: "chat-af425",
  storageBucket: "chat-af425.appspot.com",
  messagingSenderId: "517440150421",
  appId: "1:517440150421:web:c7e0ee38b1a2cc6242749c",
  measurementId: "G-KHNKTRCWCF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export{ auth , provider};
export default db;