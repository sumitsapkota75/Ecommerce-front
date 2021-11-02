import { API } from "@project/shared";

export const getProfile = async (): Promise<any> => {
  const { data } = await API.get(`/users/profile`);
  return data;
};

export const updateProfile = async (data: any) => {
  return API.post(`/users/profile`, data);
};
