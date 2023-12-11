import React, { createContext, useEffect, useState } from "react";
import { useFetchJackets } from "./noContext";

export const ShopContext = createContext(null);
  
export const ShopContextProvider = (props) => {
  const { blazers, setBlazers, cartItems, setCartItems } = useFetchJackets();
  
  /* const handleChangeCartItem = (e) => {
    e.preventDefault();

    fetch("http://localhost:3000/blazer", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: user_id,
        cartItem_id: cartItem_id,
        count: count
      }),
    })
      .then((response) => response.json())
      .then((blazer) => console.log(blazer[0]));
  };
 */
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = blazers.find((blazer) => blazer.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
        
      }
    }
    return totalAmount;
  }

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const contextValue = {
    blazers,
    setBlazers,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  };
  console.log(cartItems)

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};