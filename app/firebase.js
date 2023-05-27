import { initializeApp } from "firebase/app";

import {
    getFirestore,
    collection,
    getDocs,
    addDoc,
    doc,
    updateDoc,
    deleteDoc
} from "firebase/firestore";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyACqfoi29jhoVZgbXkEhRlDN0rxxiemE4g",
    authDomain: "aqua-360.firebaseapp.com",
    projectId: "aqua-360",
    storageBucket: "aqua-360.appspot.com",
    messagingSenderId: "376185236600",
    appId: "1:376185236600:web:e454021f86192f5e3b518d"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export const createUser = async (user) => {
    const docRef = await addDoc(collection(db, "users"), user);
    console.log("Document written with ID: ", docRef.id);
}

export const createCustomer = async (customer) => {
    const docRef = await addDoc(collection(db, "clients"), customer);
    console.log("Document written with ID: ", docRef.id);
}

export const createEmployee = async (employee) => {
    const docRef = await addDoc(collection(db, "delivery-boys"), employee);
    console.log("Document written with ID: ", docRef.id);
}

export const createAdmin = async (user) => {
    const docRef = await addDoc(collection(db, "manager"), user);
    console.log("Document written with ID: ", docRef.id);
}

export const login = async (email, password) => {
    try{
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        return user;
    }
    catch(error){
        alert(error);
    }
}

export const logout = async () => {
    try{
        await signOut(auth);
    }
    catch(error){
        alert(error);
    }
}

export const register = async (user) => {
    try{
        const userCredential = await createUserWithEmailAndPassword(auth, user.email, user.password);
        const newUser = userCredential.user;
        
        if(newUser){
            await createUser(user);
            return newUser;
        }
    }
    catch(error){
        alert(error);
    }
}