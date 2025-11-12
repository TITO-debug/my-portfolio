import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBq7CklfkYCOOT_kUe6c-iZxgJx-PO7mx8",
  authDomain: "tito-portfolio-ae26c.firebaseapp.com",
  projectId: "tito-portfolio-ae26c",
  storageBucket: "tito-portfolio-ae26c.firebasestorage.app",
  messagingSenderId: "YOUR_MSG_SENDER_ID",
  appId: "1:1014960650723:web:c90e7dcb2a81bbd1b148d6",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
