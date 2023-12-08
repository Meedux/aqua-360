import { initializeApp } from "firebase/app";

import {
    getFirestore,
    collection,
    getDocs,
    addDoc,
    doc,
    updateDoc,
    deleteDoc,
    getDoc
} from "firebase/firestore";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from "firebase/auth";

import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
    uploadBytes
} from "firebase/storage";


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
export const storage = getStorage(app);

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
    querySnapshot.forEach((doc) => {
        if(doc.data().uid === uid){
            setUser(doc.data());
        }
    });
}

export const getUserByUIDD = async (uid) => {
    const querySnapshot = await getDocs(collection(db, "users"));
    let user;
    querySnapshot.forEach((doc) => {
        if(doc.data().uid === uid){
            user = doc.data();
        }
    });

    return user;
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
        const creds = await getUserByUIDD(user.uid);
        return creds;
    }
    catch(error){
        alert(error)
        return null;
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

export const addToBasket = async (item, id) => {
    try
    {
        const docRef = await addDoc(collection(db, "basket"), item);
        await updateDoc(doc(db, "basket", docRef.id), {
            id: docRef.id,
            uid: id
        });
    }catch(error){
        alert(error);
    }
}

export const getBasket = async (id, setBasket) => {
    try{
    const querySnapshot = await getDocs(collection(db, "basket"));
    const basket = [];
    querySnapshot.forEach((doc) => {
        if(doc.data().uid === id){
            basket.push(doc.data());
        }
    });
    setBasket(basket);}catch(error){
        alert(error);
    }
}

export const pay = async (id, address, opt, cardDetails) => {
    try{
        // get all of the user's items from the basket and put them in a list
        const querySnapshot = await getDocs(collection(db, "basket"));
        const basket = [];
        querySnapshot.forEach((doc) => {
            if(doc.data().uid === id){
                basket.push(doc.data());
            }
        })

        // get the user's data
        const userData = await getUserByUIDD(id);

        // create a transaction document with the user, the items, the total price, and the address
        const transaction = {
            user: userData,
            items: basket,
            total: 0,
            address: address,
            option: (opt === 'standard') ?  "Standard < 20 Mins" : (opt == 'later') && "Order for Later",
            cardDetails: cardDetails
        }

        // calculate the total price
        basket.forEach((item) => {
            transaction.total += item.price;
        })

        // add the transaction to the database
        const docRef = await addDoc(collection(db, "transactions"), transaction);
        await updateDoc(doc(db, "transactions", docRef.id), {
            id: docRef.id,
            uid: id
        });

        // delete all of the user's items from the basket
        basket.forEach((item) => {
            deleteDoc(doc(db, "basket", item.id));
        })

        //notify with the type of pay
        await notify(id, "pay");
    }catch(error){
        alert(error);
    }
}

export const getAllTransactions = async () => {
    try{
        const querySnapshot = await getDocs(collection(db, "transactions"));
        const transactions = [];
        querySnapshot.forEach((doc) => {
            transactions.push(doc.data());
        });
        return transactions;
    }catch(error){
        alert(error);
    }
}

export const getTransactions = async (id) => {
    try{
        const querySnapshot = await getDocs(collection(db, "transactions"));
        const transactions = [];
        querySnapshot.forEach((doc) => {
            if(doc.data().uid === id){
                transactions.push(doc.data());
            }
        });
        return transactions;
    }catch(error){
        alert(error);
    }
}

export const getNotifications = async (id) => {
    try{
        const querySnapshot = await getDocs(collection(db, "notifications"));
        const notifications = [];
        querySnapshot.forEach((doc) => {
            if(doc.data().uid === id){
                notifications.push(doc.data());
            }
        });
        return notifications;
    }catch(error){
        alert(error);
    }
}

export const notify = async (id, type) => {
    try{
        // if the notification type is pay then create a notification with the user id as uid, and the message saying that the user has paid
        if(type === "pay"){
            const notification = {
                uid: id,
                message: `Payment Successful, Please patiently wait for your order to arrive!`
            }
            const docRef = await addDoc(collection(db, "notifications"), notification);
            await updateDoc(doc(db, "notifications", docRef.id), {
                id: docRef.id
            });
        }
    }catch(error){
        alert(error);
    }
}

export const uploadImage = async (file) => {
    try{
        // name the image using math random
        const id = Math.random().toString(36).substring(2);

        const response = await fetch(file.assets[0].uri)
        const blob = await response?.blob(); 

        // upload the image to firebase storage
        const reference = ref(storage, `images/` + id);
        const uploadTask = await uploadBytes(reference, blob);
        // get the image url
        const url = await getDownloadURL(uploadTask.ref);
        return url

        
    }catch(error){
        alert(error);
    }
}