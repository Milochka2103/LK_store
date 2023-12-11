import "./App.css";
import "tachyons";
import { AccountPage } from "./AccountPage/AccountPage";
import { BrowserRouter } from "react-router-dom";
import { LoadUserProvider } from "./context/load-user-context";
import { useFetchJackets } from "./context/noContext";
import { useEffect, useState } from "react";

const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <LoadUserProvider>
          <AccountPage />
        </LoadUserProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
/*
      {route === "home" ? (
        <AccountPage firstname={firstname} lastname={lastname} />
      ) : route === "signin" || route === "signout" ? (
        <Register onChangeRoute={onChangeRoute} loadUser={loadUser} />
      ) : (
        <SignIn onChangeRoute={onChangeRoute} loadUser={loadUser} />
      )}
    </div> */
