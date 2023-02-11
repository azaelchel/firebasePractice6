import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDt5_dWX7JrizEgrFbsrly6-PtrEBM9UqA",
  authDomain: "practica6firebase-26653.firebaseapp.com",
  databaseURL: "https://practica6firebase-26653-default-rtdb.firebaseio.com",
  projectId: "practica6firebase-26653",
  storageBucket: "practica6firebase-26653.appspot.com",
  messagingSenderId: "688341786941",
  appId: "1:688341786941:web:892cf6607d78e8c82ba554",
  measurementId: "G-F2XSSNJLKR",
  basedataURL: "https://practica6firebase-26653-default-rtdb.firebaseio.com/"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {app, getDatabase, ref, set};