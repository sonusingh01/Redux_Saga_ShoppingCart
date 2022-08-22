import { Button, Grid } from "@mui/material";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {  useNavigate } from "react-router-dom";
import { removeToCart } from "../Models/Action";

function Cart() {
const dispatch = useDispatch();

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/`; 
    navigate(path);
  }
  const routerchekout = () =>{ 
    let path = `/payment`; 
    navigate(path);
  }
  const cartData = useSelector((state) => state.cartData);
  console.log(cartData);

  return (

    <div className="container">
       <Button variant="contained"
                color="success" className="px-4 mt-4 mb-4"
            onClick={routeChange}
              >
              Back
            </Button>
      {cartData.map((item) => (
        <Grid
          container
          style={{
            display: "flex",
            flexDirection: "row",
            border: "12px solid #d9dadb",
            padding: "2rem",
            margin: "2 rem",
          }}
        >
          <Grid item md={6} xs={12} style={{ display: "flex", height: "40vh" }}>
            <img src={item.image} alt="" style={{ width: "300px" }} />
          </Grid>
          <Grid
            item
            md={12}
            xs={12}
            lg={3}
            style={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column ",
              justifyContent: "center",
            }}
          >
            <div
              className="container "
              style={{
                display: "flex",
                flexDirection: "column ",
                width: "150% ",
                fontSize: "1rem ",
              }}
            >
              <h1>Name : {item.title} </h1>
              <div>Color : {item.color} </div>

              <div>Category : {item.category} </div>
              <p>Description: {item.description} </p>
              <div>Price : {item.price} </div>

              <div style={{display:"flex", margin:"3rem ", padding:""}}>
             
              <Button style={{marginRight:"1rem"}}
                variant="contained"
                color="error"
                onClick={() => dispatch(removeToCart(item.id))}
              >
                Remove to Cart
              </Button>

              <Button
        
              variant="contained"
              color="warning"
              style={{ width: "30%",   height:"2rem"}}onClick={routerchekout}
            >
              Checkout 
            </Button>
              
            </div>
             
            </div>

         
          </Grid>
         
        </Grid>
      ))}
    </div>
  );
}

export default Cart;
