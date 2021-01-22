import axios from 'axios';

import { FETCH_PRODUCTS } from './products_types';

const URL = 'https://600add08778d1a0017794934.mockapi.io/api/v1/products';

export const fetchProducts = () => {
  return async (dispatch) => {
    const response = await axios.get(URL);
    dispatch({ type: FETCH_PRODUCTS, payload: response.data });
  };
};
