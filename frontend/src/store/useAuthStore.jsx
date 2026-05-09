import { create } from "zustand";
import { signup, signin, logout,me } from "../services/auth";
import toast from "react-hot-toast"

export const useAuthStore = create((set) => ({
  user: null,
  loading: false,
  signupLoading: false,
  signinLoading:false,

  checkAuth: async () => {
    try {
      set({ loading: true });
      const res = await me();
      set({ user: res.data.user, loading: false });
    } catch (err) {
      set({ loading: false, user: null });
    }
  },

  signup: async (data) => {
    try {
      set({ signupLoading: true });
      const res = await signup(data);
      set({ user: res.data.user, signupLoading: false });

      toast.success("Registeration successful 🎉");
      return res;
    } catch (err) {
      set({ signupLoading: false });
      toast.error(err?.response?.data?.message);
    }
  },
  signin: async (data) => {
    try {
      set({ signinLoading: true });
      const res = await signin(data);
      set({ user: res.data.user, signinLoading: false });
      console.log(res);
      toast.success("Login successful 🎉");
        return res;
    } catch (err) {
      set({ signinLoading: false });
      toast.error(err?.response?.data?.message);
    }
  },
  logout:async()=>{
    try{
      const res=await logout();
      set({user:null});
      toast.success("Logout successfull");
    }
    catch(err){
      toast.error(err?.response?.data?.message);
    }
  }
}));
