import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {

};

const firebase = Firebase.initializeApp(firebaseConfig);
const {FieldValue} = Firebase.firestore;

console.log('firebase', firebase);

export {firebase, FieldValue};