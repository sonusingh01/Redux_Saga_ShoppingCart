import React from 'react'
import ".././style.css";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
    "pk_test_51LZSMbSGGxAmV8rXkdebJyZxmGYwO7LbGOQBqXjQ6jHjyKFkEgyvvtx6PEUipceSgOAYNEMP4HY47NPzPkzdyTV700lm9VPrER"
  );
function Index() {
  return (
    <>
     
     <Elements stripe={stripePromise}>
       <CheckoutForm/>
        </Elements>
    </>
  )
}

export default Index