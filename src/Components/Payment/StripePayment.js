import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
} from "@stripe/react-stripe-js";

function StripePayment() {
  const CARD_ELEMENT_OPTIONS = {
    style: {
      base: {
        color: "#303238",
        fontSize: "16px",
        fontFamily: "sans-serif",
        fontSmoothing: "antialiased",
        "::placeholder": {
          color: "#CFD7DF",
        },
      },
      invalid: {
        color: "#e5424d",
        ":focus": {
          color: "#303238",
        },
      },
    },
  };

  return (
    <React.Fragment>
      <div className="container" style={{ width: "25%",  marginLeft:"5rem" }}>
        <Typography variant="h6" gutterBottom>
          Payment method
        </Typography>
        <Grid
          container
          spacing={12}
          style={{ display: "flex", marginRight: "20px" }}
        >
          <Grid item md={6}>
            <TextField
              required
              id="cardName"
              label="Name on card"
              style={{ width: "25rem" }}
            />
            <label>
              Card details
              <CardNumberElement
                options={CARD_ELEMENT_OPTIONS}
                style={{ height: "5rem" }}
              />
            </label>
            <label>
              <CardExpiryElement />
            </label>
            <label>
              <CardCvcElement />
            </label>

            {/* 
            <span>Card Number</span>
              <br></br> */}
            {/* <InputMask
                mask="9999 9999 9999 9999"
                required
                id="cardNumber"
                label="Card number"
                style={{ width: "25rem", height: "2rem", marginTop: "0.5rem" }}
              />
               <span>
              Expiry date <span>month/year </span>
            </span> */}
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}

export default StripePayment;
