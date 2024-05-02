import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD9ICrbvqN2Dsay79jtGYotb55P64qdS0M",
  authDomain: "confiy-store.firebaseapp.com",
  projectId: "confiy-store",
  storageBucket: "confiy-store.appspot.com",
  messagingSenderId: "45232599077",
  appId: "1:45232599077:web:7be6eff94f10cd3cd00fcc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth
export const auth = getAuth()