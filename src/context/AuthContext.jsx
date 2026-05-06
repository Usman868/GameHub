import { createContext, useContext, useState, useEffect } from "react";
import { onAuthChange} from "../firebase/auth";
import { getUserProfile } from "../firebase/firestore";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [authModalOpen, setAuthModalOpen] = useState(false);

    useEffect(() => {
        const unsub = onAuthChange(async (firebaseUser) => {
            setUser(firebaseUser);
            if (firebaseUser) {
                const prof = await getUserProfile(firebaseUser.uid);
                setProfile(prof);
            } else {
                setProfile(null);
            }
            setLoading(false);
        });
        return unsub;
    }, [])

    const openAuthModal = () => setAuthModalOpen(true);
    const closeAuthModal = () => setAuthModalOpen(false);

    return (
        <AuthContext.Provider value={{ user, profile, loading, authModalOpen, openAuthModal, closeAuthModal }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth=()=>{
    const ctx= useContext(AuthContext);
    if(!ctx) throw new Error("useAuth must be used inside AuthProvider");
    return ctx;
}