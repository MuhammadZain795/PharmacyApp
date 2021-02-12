import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDNTBtY8G8AN-_OodmfnMGZ3AUdFcjv4Ns",
    authDomain: "pharmacy-app-e1dfe.firebaseapp.com",
    databaseURL: "https://pharmacy-app-e1dfe-default-rtdb.firebaseio.com",
    projectId: "pharmacy-app-e1dfe",
    storageBucket: "pharmacy-app-e1dfe.appspot.com",
    messagingSenderId: "106374473598",
    appId: "1:106374473598:web:db385e98417b396c53352f",
    measurementId: "G-NL7K3YS4FX"
});

const db = firebaseApp.firestore();

export default db;