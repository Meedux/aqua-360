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

export const createUser = async (user, id) => {
    const docRef = await addDoc(collection(db, "users"), user);
    // add a uid to the document
    await updateDoc(doc(db, "users", docRef.id), {
        uid: id
    });
}

export const createClient = async (customer, id) => {
    const docRef = await addDoc(collection(db, "clients"), customer);
    await updateDoc(doc(db, "clients", docRef.id), {
        uid: id
    });
}

export const createDeliveryBoy = async (employee) => {
    const docRef = await addDoc(collection(db, "delivery-boys"), employee);
    await updateDoc(doc(db, "delivery-boys", docRef.id), {
        uid: id
    });
}

export const getUserByUID = async (uid, setUser) => {
    const querySnapshot = await getDocs(collection(db, "users"));
    const users = {};
    querySnapshot.forEach((doc) => {
        if(doc.data().uid === uid){
            setUser(doc.data());
        }
    });
}

export const createAdmin = async (user) => {
    const docRef = await addDoc(collection(db, "manager"), user);
    await updateDoc(doc(db, "manager", docRef.id), {
        uid: id
    });
}

export const login = async (email, password) => {
    try{
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        return true;
    }
    catch(error){
        return false;
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
            const id = newUser.uid;
            await createUser(user, id);
            await createClient(user, id);
            return true;
        }
    }
    catch(error){
        alert(error);
        return false;
    }
}