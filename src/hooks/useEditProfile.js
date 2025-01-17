import { useState } from "react";
import useAuthStore from "../store/useAuthStore";
import useShowToast from "./useShowToast";

import { auth, firestore} from "../firebase/firebase";
import { collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import useUserProfileStore from "../store/useUserProfileStore";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useEditProfile = () => {
    const navigate = useNavigate();
	const [isUpdating, setIsUpdating] = useState(false);

    

	const authUser = useAuthStore((state) => state.user);
	const setAuthUser = useAuthStore((state) => state.setUser);
	const setUserProfile = useUserProfileStore((state) => state.setUserProfile);

	const toast = useShowToast();

	const editProfile = async (inputs, selectedFile) => {
      
		if (isUpdating || !authUser) return;
		setIsUpdating(true);

	
		const userDocRef = doc(firestore, "users", authUser.uid);
        const usersRef = collection(firestore, "users");
        
                
      
let url="";
		try {
            let updatedUsername = inputs.username || authUser.username;
            if (inputs.username && inputs.username !== authUser.username) {
                const q = query(usersRef, where("username", "==", inputs.username));
                const querySnapshot = await getDocs(q);

                if (!querySnapshot.empty) {
                    toast("Error", "Username already exists", "error");
                    updatedUsername = authUser.username; // Revert to current username
                }
            }
			if (selectedFile) {
                const formData = new FormData();
                formData.append("file", selectedFile);
                formData.append("upload_preset",import.meta.env.VITE_CLOUDINARY_PRESET_NAME); 
                formData.append("cloud_name", import.meta.env.VITE_CLOUDINARY_CLOUD_NAME); 
                formData.append("folder", `user_profiles/${updatedUsername}`);
                const response = await axios.post(
                    `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
                    formData
                  );
                 
			 url=response.data.secure_url;
			}

			const updatedUser = {
				...authUser,
				fullName: inputs.fullName || authUser.fullName,
				username: updatedUsername,
				bio: inputs.bio || authUser.bio,
				profilePicURL: url || authUser.profilePicURL,
			};

			await updateDoc(userDocRef, updatedUser);
			localStorage.setItem("user-info", JSON.stringify(updatedUser));
			setAuthUser(updatedUser);
			setUserProfile(updatedUser);
            navigate(`/${updatedUsername}`, { replace: true }); 
			toast("Success", "Profile updated successfully", "success");
            setIsUpdating(false);
		} catch (error) {
			toast("Error", error.message, "error");
		}
	};

	return { editProfile, isUpdating };
};

export default useEditProfile;