import {
  ADD_TO_CART,
  EMPTY_TO_CART,
  REMOVE_TO_CART,
  SHOW_TO_VIEW,
} from "../Constants/constants";

export const cartData = (data = [], action) => {
  switch (action.type) {
    case SHOW_TO_VIEW:
      console.log("SHOW_TO_VIEW action", action);
      data.length = data.length ? data.length - 1 : [];
      const remaining = data.filter((item) => item.id !== action.data);
      return [...remaining];
    case ADD_TO_CART:
      console.log("ADD_TO_CART action", action);
       return [action.data, ...data];

    case REMOVE_TO_CART:
      console.log("REMOVE_TO_CART", action);
      data.length = data.length ? data.length - 1 : [];
      const remainingItems = data.filter((item) => item.id !== action.data);
      return [...remainingItems];
    case EMPTY_TO_CART:
      console.log("EMPTY_CART condition", action);
      return [...data];
    default:
      return data;
  }
};
