import React from "react";
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

export const AccountPage = ({ loadUser }) => {
  return (
    <>
      <Navbar />
      <main>
        <ShopContextProvider>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/home" element={<HomePage />} />
            <Route
              exact
              path="/register"
              element={<Register loadUser={loadUser} />}
            />
            <Route
              exact
              path="/signin"
              element={<SignIn loadUser={loadUser} />}
            />
            <Route exact path="/profile" element={<Profile />} />

            <Route exact path="/cart" element={<Cart />} />

            <Route exact path="*" element={<NotFound />} />
          </Routes>
        </ShopContextProvider>
      </main>
    </>
  );
};
