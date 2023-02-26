import { set_auth } from "./../redux/actions/creators";
import { useDispatch } from "react-redux";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

function useAuth() {
	const [user] = useAuthState(auth);
	const dispatch = useDispatch();

	const logInWithEmailAndPassword = async (email: string, password: string) => {
		try {
			await signInWithEmailAndPassword(auth, email, password);
		} catch (err: any) {
			alert(err.message);
			return;
		}
		dispatch(set_auth(user));
	};
	return { logInWithEmailAndPassword };
}

export default useAuth;
