import {
  OPEN_SIDE_CART,
  CLOSE_SIDE_CART,
  TOGGLE_SIDE_CART,
} from './sidebar_types';

const initialState = {
  sideCartOpen: false,
};

const sidebarReducer = (state = initialState, { type }) => {
  switch (type) {
    case OPEN_SIDE_CART:
      return {
        ...state,
        sideCartOpen: true,
      };

    case CLOSE_SIDE_CART:
      return {
        ...state,
        sideCartOpen: false,
      };

    case TOGGLE_SIDE_CART:
      return {
        ...state,
        sideCartOpen: !state.sideCartOpen,
      };

    default:
      return state;
  }
};

export default sidebarReducer;
