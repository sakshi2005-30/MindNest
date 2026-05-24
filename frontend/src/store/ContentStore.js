import {create} from "zustand"
import {createContent} from "../services/content"
import toast from "react-hot-toast"
export const contentStore=((set)=>({
    create:async(data)=>{
        const res=await createContent(data);
        toast.success("Content saved to brain")
    }
}))