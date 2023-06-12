import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';
const url = 'https://dummyjson.com/products';

export interface Product {
  id: number,
  title: string,
  description: string,
  price: number,
  images: string[],
  rating: number

}

export interface fetchProductsAction {
  type: ActionTypes.fetchProducts;
  payload: Product[];
}

export const fetchProducts = (): ((dispatch: Dispatch<any>) => Promise<void>) => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Product[]>(url);
    dispatch<fetchProductsAction>({
      type: ActionTypes.fetchProducts,
      payload: response.data,
    });
  };
};
