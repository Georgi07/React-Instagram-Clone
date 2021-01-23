// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

// var firebaseConfig = {
//     apiKey: "AIzaSyDQypAqyhEIv94C03LkUoki1l1RVkWr_Q0",
//     authDomain: "instagram-clone-ce650.firebaseapp.com",
//     databaseURL: "https://instagram-clone-ce650-default-rtdb.firebaseio.com",
//     projectId: "instagram-clone-ce650",
//     storageBucket: "instagram-clone-ce650.appspot.com",
//     messagingSenderId: "347086996698",
//     appId: "1:347086996698:web:ee6cbfda6e0ad58151d1e3",
//     measurementId: "G-1QVVW3NELH"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();


//   export default firebaseConfig;

const firebaseApp = firebase.initializeApp({
    
        apiKey: "AIzaSyDQypAqyhEIv94C03LkUoki1l1RVkWr_Q0",
        authDomain: "instagram-clone-ce650.firebaseapp.com",
        databaseURL: "https://instagram-clone-ce650-default-rtdb.firebaseio.com",
        projectId: "instagram-clone-ce650",
        storageBucket: "instagram-clone-ce650.appspot.com",
        messagingSenderId: "347086996698",
        appId: "1:347086996698:web:ee6cbfda6e0ad58151d1e3",
        measurementId: "G-1QVVW3NELH"
      
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage};