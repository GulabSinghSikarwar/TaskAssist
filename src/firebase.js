import firebaseConfig from "./firebaseConfig";

import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseApp=initializeApp(firebaseConfig);
const db =getFirestore();
 export {db} ;
 
// getFirestore