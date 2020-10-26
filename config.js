import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyB3iYTr7kZPcNlQlW8is4wYLiPjDwlB6t0",
  authDomain: "musebuzz-4573d.firebaseapp.com",
  databaseURL: "https://musebuzz-4573d.firebaseio.com",
  projectId: "musebuzz-4573d",
  storageBucket: "musebuzz-4573d.appspot.com",
  messagingSenderId: "962454753551",
  appId: "1:962454753551:web:2a82616115bbb8d28bee7a",
  measurementId: "G-TTR78TS4LT"
};
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.database();