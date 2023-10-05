import React  from "react";
import "./Jacket.css";
import Jacket_photo from "../../../images/jacket_1.jpg";

export const Jacket = ({
  id,
  title,
  price,
  currency = "EUR",
  addToCart,
  cartItems,
}) => {
  const cartItemAmount = cartItems[id]
  return (
    <div>
      <div className="blazerCard">
        <img alt="jacket" src={Jacket_photo} className="goods" />
        <h2>{title}</h2>
        <p>{`${price} ${currency}`}</p>
        <button className="btn btn-secondary" onClick={() => addToCart(id)}>
          Add to cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
        </button>
      </div>
    </div>
  );
};
