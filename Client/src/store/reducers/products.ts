import {
  Product
} from '../actions';
import { ActionTypes, Action } from '../actions/types';

export const productsReducer = (state: Product[] = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.fetchProducts:
      return action.payload;
    default:
      return state;
  }
}
  ;