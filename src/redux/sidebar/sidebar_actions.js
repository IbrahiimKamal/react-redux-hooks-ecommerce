import {
  OPEN_SIDE_CART,
  CLOSE_SIDE_CART,
  TOGGLE_SIDE_CART,
  TOGGLE_SIDE_BAR,
  CLOSE_SIDEBAR,
} from './sidebar_types';

export const openSideCart = () => {
  return { type: OPEN_SIDE_CART };
};

export const closeSideCart = () => {
  return { type: CLOSE_SIDE_CART };
};

export const toggleSideCart = () => {
  return { type: TOGGLE_SIDE_CART };
};

export const toggleSidebar = () => {
  return { type: TOGGLE_SIDE_BAR };
};

export const closeSidebar = () => {
  return { type: CLOSE_SIDEBAR };
};
