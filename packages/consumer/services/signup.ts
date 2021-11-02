import { API } from "@project/shared";

export const signUp = async (clientData) => {
  return API.post(`/user/signup`, clientData);
};

export default signUp;
