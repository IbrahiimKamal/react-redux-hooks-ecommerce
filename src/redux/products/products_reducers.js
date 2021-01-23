import { FETCH_PRODUCTS } from './products_types';

const initialState = {
  loading: true,
  products: [],
};

const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        loading: false,
        products: payload,
      };

    default:
      return state;
  }
};

export default productsReducer;
