import { api } from "./api";

export const signup = async (data) => {
  return api.post("/auth/signup", data);
};
export const signin = async (data) => {
  return api.post("/auth/signin", data);
};
export const logout = async () => {
  return api.post("/auth/logout");
};
export const me=async()=>{
  return api.get("/auth/me");
}
