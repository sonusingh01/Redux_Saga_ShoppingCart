import { PRODUCT_LIST } from "../Constants/constants"

export const productList=()=>{
    let data = "hello"
    console.warn("action", data)
    return {
        type: PRODUCT_LIST,
        data: data

    }
}