import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function useAuth() {
	const logInWithEmailAndPassword = async (email: string, password: string) => {
		try {
			await signInWithEmailAndPassword(auth, email, password);
		} catch (err: any) {
			alert(err.message);
		}
	};
	return { logInWithEmailAndPassword };
}

export default useAuth;
