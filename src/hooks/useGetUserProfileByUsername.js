import { useEffect, useState } from "react";
import useShowToast from "./useShowToast";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firebase/firebase";
import useUserProfileStore from "../store/useUserProfileStore";

const useGetUserProfileByUsername = (username) => {
	const [isLoading, setIsLoading] = useState(true);
	const toast = useShowToast();
	const { userProfile, setUserProfile } = useUserProfileStore();

	useEffect(() => {
		const getUserProfile = async () => {
			setIsLoading(true);
			try {
                const usersRef = collection(firestore, "users");
				const q = query(usersRef, where("username", "==", username));
				const querySnapshot = await getDocs(q);

				if (querySnapshot.empty) return setUserProfile(null);

				querySnapshot.forEach((doc) => {	
					setUserProfile(doc.data());
				})

				
				
			} catch (error) {
			toast("Error", error.message, "error");
			} finally {
				setIsLoading(false);
			}
		};

		getUserProfile();
	}, [setUserProfile, username, toast]);

	return { isLoading, userProfile };
};

export default useGetUserProfileByUsername;