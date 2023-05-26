import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyACqfoi29jhoVZgbXkEhRlDN0rxxiemE4g",
    authDomain: "aqua-360.firebaseapp.com",
    projectId: "aqua-360",
    storageBucket: "aqua-360.appspot.com",
    messagingSenderId: "376185236600",
    appId: "1:376185236600:web:e454021f86192f5e3b518d"
};

export const app = initializeApp(firebaseConfig);