import {
  OPEN_SIDE_CART,
  CLOSE_SIDE_CART,
  TOGGLE_SIDE_CART,
  TOGGLE_SIDE_BAR,
  CLOSE_SIDEBAR,
} from './sidebar_types';

const initialState = {
  sideCartOpen: false,
  sidebarOpen: false,
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

    case TOGGLE_SIDE_BAR:
      return {
        ...state,
        sidebarOpen: !state.sidebarOpen,
      };

    case CLOSE_SIDEBAR:
      return {
        ...state,
        sidebarOpen: false,
      };

    default:
      return state;
  }
};

export default sidebarReducer;
