import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDdUBcY99XA9-wx1EHFX4R7YpzmANS5voc",
    authDomain: "discord-clone-yt-99071.firebaseapp.com",
    projectId: "discord-clone-yt-99071",
    storageBucket: "discord-clone-yt-99071.appspot.com",
    messagingSenderId: "951162457058",
    appId: "1:951162457058:web:fb7128565c8bfbe2c4c7bb",
    measurementId: "G-WEBEDSHXQT"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth , provider };
  export default db;