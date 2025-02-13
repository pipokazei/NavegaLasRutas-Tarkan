import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBWCIKeWLRDUUah_iW2gEs5V0IYcevh7As",
  authDomain: "tienda-turca.firebaseapp.com",
  projectId: "tienda-turca",
  storageBucket: "tienda-turca.firebasestorage.app",
  messagingSenderId: "711044231741",
  appId: "1:711044231741:web:194aeb29a2fdc1d3a1b054",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
