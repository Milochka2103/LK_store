import React, { useContext, useEffect } from "react";
import "./AccountPage.css";
import { Navbar } from "../Navbar/Navbar";
import { Register } from "../Register/Register";
import { Route, Routes } from "react-router-dom";
import { SignIn } from "../SignIn/SignIn";
import { NotFound } from "../NotFound/NotFound";
import { Profile } from "./Profile/Profile";
import { HomePage } from "./HomePage";
import { Cart } from "./Shopping-cart/Cart";
import { ShopContextProvider } from "../context/shop-context";
import { LoadUserContext } from "../context/load-user-context";

export const AccountPage = () => {

  const { userData, setUserdata } = useContext(LoadUserContext);

    useEffect(() => {
      const cookies = document.cookie.split("; ");
      const userDataCookie = cookies.find((cookie) =>
        cookie.startsWith("userData=")
      );

      if (userDataCookie) {
        const [, userData] = userDataCookie.split("=");
        const parsedUserData = JSON.parse(decodeURIComponent(userData));
        console.log(parsedUserData)

        setUserdata(parsedUserData);
      }
    }, []);
  console.log(userData)
  return (
    <>
      <ShopContextProvider>
        <Navbar />
        <main>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <HomePage
          
                />
              }
            />
            <Route
              exact
              path="/home"
              element={
                <HomePage

                />
              }
            />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/signin" element={<SignIn />} />
            <Route exact path="/profile" element={<Profile userData={userData} />} />

            <Route
              exact
              path="/cart"
              element={
                <Cart

                />
              }
            />

            <Route exact path="*" element={<NotFound />} />
          </Routes>
        </main>
      </ShopContextProvider>
    </>
  );
};
