import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyC6p67uxQ1COD-q0CD0Gx6mbNegkM6b95k",
  authDomain: "clone-5e46b.firebaseapp.com",
  projectId: "clone-5e46b",
  storageBucket: "clone-5e46b.appspot.com",
  messagingSenderId: "851206499764",
  appId: "1:851206499764:web:7438373c62a0d5f1a356e1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebaseApp.auth()
const db = firebaseApp.firestore()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }
