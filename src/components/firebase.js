import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDbXFs6urR-HH1mRvAR7eSKHl4bRdotygc",
    authDomain: "penny-juice-414cc.firebaseapp.com",
    projectId: "penny-juice-414cc",
    storageBucket: "penny-juice-414cc.appspot.com",
    messagingSenderId: "303081284908",
    appId: "1:303081284908:web:ccfd4271c24bb4c6dcb889",
    measurementId: "G-LGYQHJDDH3"    

})

 var db = firebaseApp.firestore();

 export { db };