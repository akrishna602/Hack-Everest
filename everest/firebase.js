import * as firebase from 'firebase';
import firestore from 'firebase/firestore'



const config = {
  apiKey: "AIzaSyDFI7cJ0xseonGEJgPt_SQqXoyKnSeywV0",
    authDomain: "avartan-dab6e.firebaseapp.com",
    databaseURL: "https://avartan-dab6e.firebaseio.com",
    projectId: "avartan-dab6e",
    storageBucket: "avartan-dab6e.appspot.com",
    messagingSenderId: "617215666699",
    appId: "1:617215666699:web:ff3f3426bbc36c9c"
};

firebase.initializeApp(config);



export default firebase;