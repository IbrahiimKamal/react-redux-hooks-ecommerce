import { FETCH_PRODUCTS } from './products_types';

const initialState = {
  loading: true,
  products: [],
  bestProducts: [],
  featuredProducts: [],
};

const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PRODUCTS:
      const bestProducts = state.products.filter(
        (product) => product.best === true
      );
      const featuredProducts = state.products.filter(
        (product) => product.featured === true
      );
      return {
        ...state,
        loading: false,
        products: payload,
        bestProducts,
        featuredProducts,
      };

    default:
      return state;
  }
};

export default productsReducer;
