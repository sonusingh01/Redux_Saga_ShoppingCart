import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { useEffect } from "react";
import { productList } from "../Models/ProductAction";
import "../App.css";
import { Button } from "@mui/material";
import { addToCart, removeToCart  } from "../Models/Action";

function ViewProduct() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productData);
  console.log(data);

  useEffect(() => {
    dispatch(productList());
  },[dispatch]);

 
  return (
    <>
       {/* <Button variant="contained" color="error" onClick={() => dispatch(EmptyToCart())}>
EmptyCart
</Button> */}
      <div className="product-container row">
      <h1 style={{textAlign:"center" }}>Products...</h1>
        {data.map((item) => (
            
          <div className="product-item  col-3     ">
            <div style={{width:"80%", display:"flex", flexDirection:"column ", textAlign:"center", justifyContent:"center", margin:"auto"}} ><img src={item.image} alt="" /></div>
            <div >Name : {item.title} </div>
            <div>Color : {item.color} </div>
            <div>Price : {item.price} </div>
            {/* <div>Description: {item.description} </div> */}
            <div>Category : {item.category} </div>
           
           
             
            
            {/*      */}

            <div>
              <Button
                variant="contained"
                color="success"
                onClick={() => dispatch(addToCart(item))}
                style={{ marginRight: "3px" }}
              >
                Add to Cart
              </Button>
              <Button
                variant="contained"
                color="error"
                onClick={() => dispatch(removeToCart(item.id))}
              >
                Remove to Cart
              </Button>
              
            </div>
          </div>
        ))}
      </div>
      {/* 

      */}
    </>
  );
}

export default ViewProduct;
