import "./firebase";
import { getDatabase, ref, set, onValue, child, get } from "firebase/database";

const db = getDatabase();

export function setGetDB(params) {
    const {userId, date , result} = params;
    set(ref(db, `${userId}/${date}`), result);
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