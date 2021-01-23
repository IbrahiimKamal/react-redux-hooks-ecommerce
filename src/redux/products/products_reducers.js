import { FETCH_PRODUCTS, ADD_TO_CART } from './products_types';

const initialState = {
  loading: true,
  products: [],
  cart: [],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };

    case ADD_TO_CART:
      // Great Item data from products array
      const item = state.products.find(
        (product) => product.id === action.payload
      );
      // Check if Item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload ? { ...item, qty: item.qty + 1 } : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };

    default:
      return state;
  }
};

export default productsReducer;
