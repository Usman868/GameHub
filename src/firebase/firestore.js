import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  collection,
  getDocs,
  onSnapshot,
  arrayUnion,
  arrayRemove,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from "./config";

const getUserProfile = async (uid) => {
  const snap = await getDoc(doc(db, "users", uid));
  return snap.exists() ? snap.data() : null;
}

const addGameToWishlist = async (uid, game) => {
  const ref = doc(db, "users", uid, "wishlist", String(game.id));
  await setDoc(ref, {
    gameId: game.id,
    name: game.name,
    background_image: game.background_image || null,
    rating: game.rating || 0,
    genres: game.genres?.map((g) => g.name) || [],
    platforms: game.platforms?.map((p) => p.platform.name) || [],
    adddedAt: serverTimestamp(),
  });
}

const removeGameFromWishlist = async (uid, gameId) => {
  await deleteDoc(doc(db, "users", uid, "wishlist", String(gameId)));
}

const isGameInWishlist = async (uid, gameId) => {
  const snapshot = await getDoc(doc(db, "users", uid, "wishlist", String(gameId)));
  return snapshot.exists();
}

const subscribeWishlist = (uid, callback) => {
  const ref = collection(db, "users", uid, "wishlist");
  const q = query(ref, orderBy("addedAt", "desc"));
  return onSnapshot(q, (snap) => {
    const items = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
    callback(items);
  })
}
export { subscribeWishlist, addGameToWishlist, removeGameFromWishlist, isGameInWishlist ,getUserProfile };