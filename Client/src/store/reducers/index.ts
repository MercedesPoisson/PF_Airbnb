


// export const reducers2 = combineReducers({
// users:usersReducer,
// });



import { combineReducers } from 'redux';
import { productsReducer, 
} from './products';
import {
  Product
} from '../actions';

export interface StoreState {
  products: Product[]
}

export const reducers =
  combineReducers<StoreState>(
    {
      products: productsReducer

    }

  )