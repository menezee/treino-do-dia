import * as firebase from "firebase/app";
import "firebase/auth";

const base = firebase.initializeApp({
    apiKey: "AIzaSyAdn_n0I7TdQlGHHAg2whfDKi7vsoLolgA",
    authDomain: "treino-do-dia.firebaseapp.com",
    databaseURL: "https://treino-do-dia.firebaseio.com",
    projectId: "treino-do-dia",
    storageBucket: "treino-do-dia.appspot.com",
    messagingSenderId: "389820844220",
    appId: "1:389820844220:web:e47898c0af6820aa7ce8b9",
    measurementId: "G-H0CMMD6M7H"
});

base.auth().useDeviceLanguage();

export default base;


