import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDL76tOemY0O_-Rl3a2PLonp3TWXCZTXpc",
  authDomain: "whatsapp-clone-14ece.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-14ece.firebaseio.com",
  projectId: "whatsapp-clone-14ece",
  storageBucket: "whatsapp-clone-14ece.appspot.com",
  messagingSenderId: "536892911963",
  appId: "1:536892911963:web:0b2a523fb64a0873716a7e",
  measurementId: "G-PG1V0SKGK8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
