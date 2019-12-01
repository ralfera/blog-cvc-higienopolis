import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyBQJxUy_Tcz04nhS7uxUK73Sn04j2bZs9M",
  authDomain: "cvc-blog.firebaseapp.com",
  databaseURL: "https://cvc-blog.firebaseio.com",
  projectId: "cvc-blog",
  storageBucket: "cvc-blog.appspot.com",
  messagingSenderId: "993488478436",
  appId: "1:993488478436:web:cb17ad829c38ce23c88cf1",
  measurementId: "G-D215CLW579"
};
// Initialize Firebase
// firebase.analytics();
export default firebase.initializeApp(config);
