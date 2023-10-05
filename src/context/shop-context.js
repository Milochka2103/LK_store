import React, { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);
  
export const ShopContextProvider = (props) => {
  const [blazers, setBlazers] = useState([]);
  const [cartItems, setCartItems] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/blazers", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((blazers) => {
        setBlazers(blazers);
        let cart = {};
        blazers.forEach((blazer, index) => {
          cart[blazer.id] = 0;
        });
        setCartItems(cart);
      });
  }, []);

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