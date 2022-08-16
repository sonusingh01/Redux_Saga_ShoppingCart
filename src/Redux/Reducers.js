import {
  ADD_TO_CART,
  EMPTY_TO_CART,
  REMOVE_TO_CART,
} from "../Constants/constants";

export const cartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("ADD_TO_CART action", action);
      return [action.data, ...data];
    case REMOVE_TO_CART:
      console.log("REMOVE_TO_CART", action);
       data.length = data.length ? data.length - 1 : []
      const remainingItems = data.filter((item) => item.id !== action.data);
      return [...remainingItems];
    case EMPTY_TO_CART:
      console.log("EMPTY_CART condition", action);
      return [...data];
    default:
      return data;
  }
};
