import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAUVgAoHDxFg4Icgxvi76jSSDQq6UhINfs",
    authDomain: "chat-b5835.firebaseapp.com",
    projectId: "chat-b5835",
    storageBucket: "chat-b5835.appspot.com",
    messagingSenderId: "659009405553",
    appId: "1:659009405553:web:1e0c4dc51991268bebd1d0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()