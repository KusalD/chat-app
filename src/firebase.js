import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCFg8Lw1u3hW1ipLOx-cffMfn2BIN2oMfg",
    authDomain: "chatapp-d65f0.firebaseapp.com",
    projectId: "chatapp-d65f0",
    storageBucket: "chatapp-d65f0.appspot.com",
    messagingSenderId: "40620816476",
    appId: "1:40620816476:web:da9c894fb00b2692540e99"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()

