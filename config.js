import firebase from 'firebase'
  const firebaseConfig = {
    apiKey: "AIzaSyBVg2t26irjCkP5yOkPFuPSfhXOn67-noA",
    authDomain: "studentattendenceapp-db121.firebaseapp.com",
    databaseURL: "https://studentattendenceapp-db121-default-rtdb.firebaseio.com",
    projectId: "studentattendenceapp-db121",
    storageBucket: "studentattendenceapp-db121.appspot.com",
    messagingSenderId: "1026443254383",
    appId: "1:1026443254383:web:a5ba0fead7cb87327b8b9a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
   export default firebase.database();