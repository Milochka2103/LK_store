import React, { useContext } from "react";
import Jacket_photo from "../../images/jacket_1.jpg";
import { ShopContext } from "../../context/shop-context";

export const CartItem = ({ id, title, price }) => {
  const { addToCart, removeFromCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];

  return (
    <div className="cartItem">
      <img alt="jacket" src={Jacket_photo} className="goods" />
      <div className="goodDescription">
        <h2>{title}</h2>
      </div>
      <div>
        <h4>{`${price} EUR`}</h4>
      </div>
      <div>
        <button className="btns" onClick={() => removeFromCart(id)}>
          -
        </button>
        <h6>{cartItemAmount}</h6>
        <button className="btns" onClick={() => addToCart(id)}>
          +
        </button>
      </div>
    </div>
  );
};
