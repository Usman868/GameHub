import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInAnonymously,
    updateProfile,
} from "firebase/auth";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { db, auth } from "./config";

const provider = new GoogleAuthProvider();

// create user data in firestore on first signIn

const createUserDoc = async (user) => {
    const ref = doc(db, user, user.uid);
    const snapshot = await getDoc(ref);
    if (!snapshot.exists()) {
        await setDoc(ref, {
            uid: user.uid,
            email: user.email || null,
            displayName: user.displayName || "Anonymous Gamar",
            photoUrl: user.photoUrl || null,
            createdAt: serverTimestamp(),
        })
    }
    return snapshot;
}

const registerWithEmail = async (email, password, displayname) => {
    const userInfo = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(userInfo, { displayName });
    await createUserData(userInfo.user);
    return userInfo;
}

const loginWithEmail = async (email, password) => {
    const userInfo = await signInWithEmailAndPassword(auth, email, password);
    return userInfo;
}

const loginWithGoogle = async () => {
    const userInfo = await signInWithPopup(auth, provider);
    await createUserData(userInfo.user);
    return userInfo;
}

const Logout = async () => {
    await signOut(auth);
}

const onAuthChange = (callback) => {
    return onAuthStateChanged(auth, callback)
}


export { registerWithEmail, loginWithEmail, loginWithGoogle, Logout, onAuthChange };