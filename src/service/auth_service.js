import "./firebase";
import { GoogleAuthProvider, getAuth, signInWithPopup, GithubAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";

const auth = getAuth();

export async function login_service (providerName) {
    const provider = getProvider(providerName);
    const userData = await signInWithPopup(auth, provider);
    

    return userData;
}

export function logout_service() {
    signOut(this.auth);
}

export function onAuthChange(onUserChanged) {
    onAuthStateChanged(this.auth, (user) => {
        onUserChanged(user)
    })
}

function getProvider(providerName){
    switch (providerName) {
        case 'Google':
            return new GoogleAuthProvider();
        case 'Github':
            return new GithubAuthProvider();
        default:
            throw new Error(`not supported provider : ${providerName}`);
    }
}