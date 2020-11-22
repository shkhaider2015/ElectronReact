import firebase from 'firebase'

// const config = {
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//     databaseURL: process.env.REACT_APP_DATABASE_URL,
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_APP_ID
//   };
const config = {
  apiKey: "AIzaSyCe4HbqJpxWwlMn3U--5kFwSuKiHNKGI_A",
  authDomain: "mainassociates.firebaseapp.com",
  databaseURL: "https://mainassociates.firebaseio.com",
  projectId: "mainassociates",
  storageBucket: "mainassociates.appspot.com",
  messagingSenderId: "479574140339",
  appId: "1:479574140339:web:1e8a1443326143cd6897c6"
};
  // Initialize Firebase
  firebase.initializeApp(config);

  const auth = firebase.auth();
  const db = firebase.firestore();
  const storage = firebase.storage();

  export  {firebase, auth, db, storage};