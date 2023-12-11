import React, { useContext } from "react";
import { CartItem } from "./CartItem";
import { ShopContext } from "../../context/shop-context";
import './Cart.css';
import { LoadUserContext } from "../../context/load-user-context";

export const Cart = () => {
  const { blazers, setCartItems, cartItems, getTotalCartAmount} =
    useContext(ShopContext);
  
  const { userData } = useContext(LoadUserContext);

  const user_id = userData.id;
  console.log(user_id)

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {blazers.map((blazer) => {
          if (cartItems[blazer.id] !== 0) {
            return (
              <CartItem
                id={blazer.id}
                title={blazer.title}
                price={blazer.price}
                setCartItems={setCartItems}
                cartItems={cartItems}
              />
            );
          }
        })}
      </div>
      <div className="checkout">
        <h3>Total: {getTotalCartAmount()} $</h3>
          <div className="checkoutBtn">
          <button>Continue Shopping</button>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
};
