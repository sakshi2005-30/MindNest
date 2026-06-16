import {api} from "./api";

export const createContent=async(data)=>{
    return api.post("/content/content",data);
}
export const getContent=async()=>{
    return api.get("/content/content");
}
export const deleteContent=async(id)=>{
    return api.delete(`/content/content/${id}`);
}