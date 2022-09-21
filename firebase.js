import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAZDnF7wmqhyr9zm02-CMMI6Abc2VwTgsc',
  authDomain: 'foodapp-29c54.firebaseapp.com',
  projectId: 'foodapp-29c54',
  storageBucket: 'foodapp-29c54.appspot.com',
  messagingSenderId: '628291721824',
  appId: '1:628291721824:web:ac65a783ad79eaeb6d0105',
  measurementId: 'G-3CF4M8WDBW',
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
