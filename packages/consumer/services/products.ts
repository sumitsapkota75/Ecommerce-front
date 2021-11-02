import { API } from "@project/shared";

export const getProducts = async (): Promise<any> => {
  const { data } = await API.get(`/product`);
  return data;
};
