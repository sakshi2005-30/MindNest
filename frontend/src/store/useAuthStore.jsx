import { create } from "zustand";
import { signup, signin, logout,me } from "../services/auth";
import toast from "react-hot-toast"
export const useAuthStore = create((set) => ({
  user: null,
  loading: false,
  signupLoading:false,


  checkAuth: async () => {
    try {
      set({ loading: true });
      const res=await me();
      set({user:res.data.user,loading:false});
    } catch (err) {
        set({loading:false,user:null});
    }
  },

  signup:async(data)=>{
    try{
        set({signupLoading:true});
        const res=await signup(data);
        set({user:res.data.data,signupLoading:false})
         toast.success("Login successful 🎉");
    }
    catch(err){
          set({ signupLoading: false });
          toast.error(err?.data?.message);
    }
  }
}));
