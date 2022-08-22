import React from "react";
import {
  ElementsConsumer,
  
  useStripe,
  useElements,
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement
} from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";
import CardSection from "./StripePayment";

const CheckoutForm = () => {
  const cartData = useSelector((state) => state.cartData);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const card = elements.getElement(CardCvcElement,
      CardExpiryElement,
      CardNumberElement);
    const result = await stripe.createToken(card);
    if (result.error) {
      console.log(result.error.message);
    } else {
      console.log(result.token);
    }
  };

  let amount =
    cartData.length &&
    cartData.map((item) => item.price).reduce((prev, next) => prev + next);
  

  return (
    <div>
        {/* <div className="product-info" style={{display:'flex'  ,  float:"left"}} >
          {cartData.map((item) => (
            <div className="container"  >
              <img src={item.image} alt="" style={{ width: "10%" , display:"flex",flexDirection:"row"  }} />
              
            </div>
          ))}
          <div>
            <div className="container" s>
              <div className="adjust-price">
                <h4>Amount</h4>
                <h4>{amount}</h4>
              </div>
              <div className="adjust-price">
                <h4>Discount</h4>
                <h4>
                
                  {amount / 10}
                </h4>
              </div>
              <div className="adjust-price">
                <h4>Tax</h4>
                <h4>000</h4>
              </div>
              <div className="adjust-price">
                <h4>Total</h4>
                <h4>{amount - amount / 10}</h4>
              </div>
            </div>
          </div>
        </div> */}

      <form onSubmit={handleSubmit}>
        <CardSection />
        <button
          disabled={!stripe}
          className="btn-pay"
          style={{ width: "9rem", display: "flex", marginLeft: "7rem" }}
        >
          Buy Now
        </button>
      </form>
    </div>
  );
};

export default function InjectedCheckoutForm() {
  return (
    <ElementsConsumer>
      {({ stripe, elements }) => (
        <CheckoutForm stripe={stripe} elements={elements} />
      )}
    </ElementsConsumer>
  );
}
