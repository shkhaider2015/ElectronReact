import firebase from 'firebase'

// const config = {
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_APP_ID
//   };

// const config = {
//   apiKey: "AIzaSyCe4HbqJpxWwlMn3U--5kFwSuKiHNKGI_A",
//   authDomain: "mainassociates.firebaseapp.com",
//   databaseURL: "https://mainassociates.firebaseio.com",
//   projectId: "mainassociates",
//   storageBucket: "mainassociates.appspot.com",
//   messagingSenderId: "479574140339",
//   appId: "1:479574140339:web:1e8a1443326143cd6897c6"
// };

// Mian Configuration
const config = {
  apiKey: "AIzaSyAwtgIeShovC4SknMVNALPRaANBxM6tp3w",
    authDomain: "mianassociates-343c3.firebaseapp.com",
    projectId: "mianassociates-343c3",
    storageBucket: "mianassociates-343c3.appspot.com",
    messagingSenderId: "882874612127",
    appId: "1:882874612127:web:2681e1c83701d865a9e5aa"
}
  // Initialize Firebase
  firebase.initializeApp(config);

  const auth = firebase.auth();
  const db = firebase.firestore();
  const storage = firebase.storage();

  db.settings({
    cacheSizeBytes : db.CACHE_SIZE_UNLIMITED
  })
  db
  .enablePersistence()
  .then(()=> console.log("Persistence Works") )
  .catch( ()=> console.log("Persistence Not Works") )

  export  {firebase, auth, db, storage};