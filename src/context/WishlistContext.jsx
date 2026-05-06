import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { useAuth } from "./AuthContext";
import toast from "react-hot-toast";
import {
    subscribeWishlist,
    addGameToWishlist,
    removeGameFromWishlist,
} from "../firebase/firestore";

const WishlistContext = createContext(null);

export const WishlistProvider = ({ children }) => {
    const { user } = useAuth();
    const [wishlist, setWishlist] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!user) { setWishlist([]); return; }
        setLoading(true)
        const unsub = subscribeWishlist(user.uid, (items) => {
            setWishlist(items);
            setLoading(false);
        });
    }, [user]);

    const isWishlist = useCallback(
        (gameId) => wishlist.some((g) => g.gameId === String(gameId)),
        [wishlist]
    );

    const toggleWishlist = useCallback(
        async (game) => {
            if (!user) {
                toast.error("Sign in to save games to your wishlist");
                return;
            };
            if (isWishlist(game.id)) {
                await removeGameFromWishlist(user.uid, game.id);
                toast("Removed from wishlist", { icon: "🗑️" });
            } else {
                await addGameToWishlist(user.uid, game.id);
                toast.success("Added to wishlist!");
            }
        }, [user, isWishlist]
    );

    return (
        <WishlistContext.Provider value={{ wishlist, loading, isInWishlist, toggleWishlist }}>
            {children}
        </WishlistContext.Provider>
    );

}

export const useWishlist=()=>{
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error("useWishlist must be used inside WishlistProvider");
  return ctx;
}