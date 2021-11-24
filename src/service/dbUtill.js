import "./firebase";
import { getDatabase, ref, set, remove, onValue } from "firebase/database";

const db = getDatabase();

export function setDB(userId, date , cards) {
    set(ref(db, `${userId}/${date}`), cards);
}
export function removeCard(userId, card) {
    remove(ref(db, `${userId}/cards/${card.id}`));
}

export function syncCard(userId, onUpdate) {
    const starCountRef = ref(db, `${userId}/cards`);
    onValue(starCountRef, (snapshot) => {
        const value = snapshot.val();
        value && onUpdate(value)
    });
}