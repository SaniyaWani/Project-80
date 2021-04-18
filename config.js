import firebase from 'firebase';
require('@firebase/firestore')


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBRThomDsjJJlVuhHjEIDQnFLL0MtWtdRs",
    authDomain: "batter-app-c307d.firebaseapp.com",
    projectId: "batter-app-c307d",
    storageBucket: "batter-app-c307d.appspot.com",
    messagingSenderId: "663915226008",
    appId: "1:663915226008:web:29ed619b8b88eaa2e001ed"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


export default firebase.firestore();