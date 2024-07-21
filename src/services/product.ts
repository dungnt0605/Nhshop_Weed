import { IProduct } from "@/common/types/product";
import instance from "@/configs/axios";
import { AxiosResponse } from "axios";
// import { IProduct } from '@/common/types/product'
// const userDataString = localStorage.getItem('user');
// let token = '';
// if (userDataString) {
//     try {
//         const userData = JSON.parse(userDataString);
//         token = userData.token || '';
//     } catch (error) {
//         console.error('Không thể phân tích dữ liệu từ localStorage:', error);
//     }
// }
// // eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getAllProducts = async (): Promise<AxiosResponse<any>> => {
  try {
    const response = await instance.get("/products");
    return response;
  } catch (error) {
    return {
      data: [],
      status: 500,
      statusText: "Internal Server Error",
      headers: {},
      config: {} as any,
    };
  }
};
export const getProductById = async (id: string) => {
  try {
    const response = await instance.get(`/product/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const addProduct = async (product: IProduct) => {
  try {
    const response = await instance.post(`/product`, product);
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const removeProduct = async (id: string) => {
  try {
    const response = await instance.delete(`/product/${id}`, {});
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const editProduct = async (product: IProduct) => {
  try {
    const response = await instance.put(`/product/${product._id}`, product);
    return response;
  } catch (error) {
    console.log(error);
  }
};
