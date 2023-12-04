import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCmydyQ_LKByIEfUFSUzhxD_ylDwYcFJfs",
  authDomain: "drumsonlinelmb.firebaseapp.com",
  projectId: "drumsonlinelmb",
  storageBucket: "drumsonlinelmb.appspot.com",
  messagingSenderId: "275011602503",
  appId: "1:275011602503:web:fb2cb5a56a5efe43368962",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;