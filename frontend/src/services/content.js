import {api} from "./api";

export const createContent=async(data)=>{
    return api.post("/content/content",data);
}