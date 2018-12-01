import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage'


// Initialize Firebase
var config = {
  apiKey: "AIzaSyCd5YR1D2yOm1W9A1ZLbS266QKVYv1kukk",
  authDomain: "miu-nottingham.firebaseapp.com",
  databaseURL: "https://miu-nottingham.firebaseio.com",
  projectId: "miu-nottingham",
  storageBucket: "miu-nottingham.appspot.com",
  messagingSenderId: "980884905409"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

// ? new
firebase.storage();


export default firebase;