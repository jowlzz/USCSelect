import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Auth, googleProvider } from "./config";

export const signInWithGooglePopup = async () => {
    try {
        const result = await signInWithPopup(Auth, googleProvider);
        const user = result.user;
        console.log("Successfully signed in with Google:", user);
        return user;
    } catch (error) {
        console.error("Error signing in with Google:", error);
        throw error;
    }
};
