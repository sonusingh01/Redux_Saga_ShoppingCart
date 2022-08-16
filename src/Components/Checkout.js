import React from "react";
import { useSelector } from "react-redux";

function Checkout() {
  const cartData = useSelector((state) => state.cartData);
  let amount =
    cartData.length &&
    cartData.map((item) => item.price).reduce((prev, next) => prev + next);
  console.warn(amount);
  return (
    <div className="container">
      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {cartData.map((item) => (
            <>
              <tr>
                <th scope="row">{item.id}</th>
                <th>
                  <img src={item.image} alt="" style={{ width: "10%" }} />
                </th>
                <td>{item.title}</td>
                <td>{item.price}</td>
              </tr>
            </>
          ))}
        </tbody>
      </table>

      <div
        className="price-details"
        style={{
          textAlign: "left",
          margin: "auto",
          padding: "0.5rem",
          fontSize: "20px",

          color: "blue",
        
        }}
      >
        <div className="container" style={{ display:"flex", flexDirection:"column" , textAlign:"center" , border:"2px solid grey", padding:"3rem", margin:"3rem"}}>
        <div className="adjust-price" >
          <span>Amount</span>
          <span>.................................................{amount}</span>
        </div>
        <div className="adjust-price">
          <span>Discount</span>
          <span>
            ...............................................
            {amount / 10}
          </span>
        </div>
        <div className="adjust-price">
          <span>Tax</span>
          <span>......................................................  ....000</span>
        </div>
        <div className="adjust-price">
          <span>Total</span>
          <span>...................................................{amount-amount/10}</span>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
