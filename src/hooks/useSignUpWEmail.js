import { collection, doc, getDocs, query, setDoc, where } from 'firebase/firestore';
import {auth} from '../firebase/firebase'
import {firestore} from '../firebase/firebase'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import useShowToast from './useShowToast';
import useAuthStore from '../store/useAuthStore';

const useSignUpWEmail = () => {

	const signupUser=useAuthStore(state=>state.login)


    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

const toast=useShowToast()

      const signup=async(inp)=>{
        if (!inp.email || !inp.password || !inp.username || !inp.fullName) {
			toast('Error','Please Fill all the Required fields!', 'error')
			return;
		}

		const usersRef = collection(firestore, "users");

		const q = query(usersRef, where("username", "==", inp.username));
		const querySnapshot = await getDocs(q);

		if (!querySnapshot.empty) {
			toast("Error", "Username already exists", "error");
			return;
		}

        try {
            const newUser= await createUserWithEmailAndPassword(inp.email,inp.password)
            if (!newUser && error) {
				toast('Error',error.message,'error')
				return;
			}

            if (newUser) {
				const userDoc = {
					uid: newUser.user.uid,
					email: inp.email,
					username: inp.username,
					fullName: inp.fullName,
					bio: "",
					profilePicURL: "",
					followers: [],
					following: [],
					posts: [],
					createdAt: Date.now()
				};
                await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
				localStorage.setItem("user-info", JSON.stringify(userDoc));
				signupUser(userDoc)}

        } catch (error) {
            
        }
      }

  return {loading,error,signup}
}

export default useSignUpWEmail