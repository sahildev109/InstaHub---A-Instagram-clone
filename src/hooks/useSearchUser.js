import { useState } from "react";
import useShowToast from "./useShowToast";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firebase/firebase";

const useSearchUser = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [user, setUser] = useState(null);
	const toast = useShowToast();

	const getUserProfile = async (username) => {
		setIsLoading(true);
		setUser(null);
		try {
            const userRef=collection(firestore, "users")
			const q = query(userRef, where("username", "==", username));

			const querySnapshot = await getDocs(q);
			if (querySnapshot.empty) return toast("Error", "User not found", "error");

            const doc = querySnapshot.docs[0];
            setUser(doc.data());
		} catch (error) {
			toast("Error", error.message, "error");
			setUser(null);
		} finally {
			setIsLoading(false);
		}
	};

	return { isLoading, getUserProfile, user, setUser };
};

export default useSearchUser;