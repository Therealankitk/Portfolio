import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB9rEKYNrAPK0HQYeGAytdG4fomEGA35_o",
  authDomain: "portfolio-page-9d8be.firebaseapp.com",
  databaseURL: "https://portfolio-page-9d8be-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "portfolio-page-9d8be",
  storageBucket: "portfolio-page-9d8be.firebasestorage.app",
  messagingSenderId: "1076041382126",
  appId: "1:1076041382126:web:fce96b8cf462aabacb5bff"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
