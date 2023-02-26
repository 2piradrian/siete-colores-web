import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

function useAuth() {
	const [user, error] = useAuthState(auth);

	const logInWithEmailAndPassword = async (email: string, password: string) => {
		try {
			await signInWithEmailAndPassword(auth, email, password);
		} catch (err: any) {
			alert(err.message);
		}
	};
	return { logInWithEmailAndPassword, user, error };
}

export default useAuth;
