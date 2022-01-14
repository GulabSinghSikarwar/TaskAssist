// import  firebase from 'firebase/app'
// import 'firebase/firebase-firestore'
// import firebaseConfig from './firebaseConfig'

// firebase.initializeApp(firebaseConfig)

// const db=firebase.firestore()

// export {db};

import firebaseConfig from "./firebaseConfig";

import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseApp=initializeApp(firebaseConfig);
const db =getFirestore();
 export {db} ;
 
// getFirestore