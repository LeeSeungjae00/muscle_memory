import "./firebase";
import { getDatabase, ref, set, remove, onValue, child, get } from "firebase/database";

const db = getDatabase();

export function setGetDB(params) {
    const {userId, date , cards} = params;
    set(ref(db, `${userId}/${date}`), cards);
    return getDB({userId});
}
export async function getDB (params) {
    const {userId} = params;
    const dbRef = ref(getDatabase());
    const getData = await get(child(dbRef, `${userId}`));
    if(getData.val()){
        return getData.val();
    }
    return "no data"
}

export function syncCard(userId, onUpdate) {
    const starCountRef = ref(db, `${userId}/cards`);
    onValue(starCountRef, (snapshot) => {
        const value = snapshot.val();
        value && onUpdate(value)
    });
}