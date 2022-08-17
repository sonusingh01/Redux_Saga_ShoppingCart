import { ADD_TO_CART, EMPTY_TO_CART, REMOVE_TO_CART, SHOW_TO_VIEW } from "../Constants/constants"


export const showToView=(data)=>{
    console.log(data)
      return {
          type:SHOW_TO_VIEW,
          data
  
      }
  }   


export const addToCart=(data)=>{
  console.log(data)
    return {
        type:ADD_TO_CART,
        data:data

    }
}   


export const removeToCart=()=>{
    const data="remove"
    return{
        type:REMOVE_TO_CART,
        data:data
    }
}
export const EmptyToCart = (data) => {
    console.warn("action", )
    return {
        type: EMPTY_TO_CART,
        data:data

    }
}