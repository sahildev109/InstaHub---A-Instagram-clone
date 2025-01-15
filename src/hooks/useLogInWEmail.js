import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

import { auth, firestore } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import useAuthStore from "../store/useAuthStore";
import useShowToast from "./useShowToast";

const useLogInWEmail = () => {
	const toast = useShowToast();
	const [signInWithEmailAndPassword,user , loading, error] = useSignInWithEmailAndPassword(auth);
	const loginUser = useAuthStore((state) => state.login);

	const login = async (inp) => {
		if (!inp.email || !inp.password) {
			return toast("Error", "Please fill all the fields", "error");
		}
		try {
			const userCred = await signInWithEmailAndPassword(inp.email, inp.password);

			if (userCred) { 
				const docRef = doc(firestore, "users", userCred.user.uid);
				const docSnap = await getDoc(docRef);
				localStorage.setItem("user-info", JSON.stringify(docSnap.data()));
				loginUser(docSnap.data());
			}
		} catch (error) {
			toast("Error", error.message, "error");
		}
	};

	return { loading, error, login };
};

export default useLogInWEmail