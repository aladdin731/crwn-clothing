import firebase from "firebase/app";

import "firebase/firestore";

import "firebase/auth";

const config = {
  apiKey: "AIzaSyAwz-iVUpD9hhk7Lg_u5r7IZG1m8oCM084",
  authDomain: "crwn-clothing-9bb19.firebaseapp.com",
  databaseURL: "https://crwn-clothing-9bb19.firebaseio.com",
  projectId: "crwn-clothing-9bb19",
  storageBucket: "crwn-clothing-9bb19.appspot.com",
  messagingSenderId: "121603792047",
  appId: "1:121603792047:web:a90b11c748c6888dd0085a",
  measurementId: "G-P0D4572K1P",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
