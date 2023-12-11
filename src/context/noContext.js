import React, { useEffect, useState } from 'react'

export const 
useFetchJackets = () => {
  const url = "http://localhost:3000/blazers/";

  const [blazers, setBlazers] = useState([]);
  const [cartItems, setCartItems] = useState({});
  useEffect(() => {
    fetch(url, {
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
      })
      .catch((error) => console.log(error));
  }, [url]);
  return {blazers, setBlazers, cartItems, setCartItems}
}
