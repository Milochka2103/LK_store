import React, { createContext, useEffect, useState } from 'react';

export const LoadUserContext = createContext(null);

export const LoadUserProvider = (props) => {
  const [userData, setUserdata] = useState(null);
  const [isSignIn, setIsSignIn] = useState(false);

/*   const loadUser = (user) => {
    setUserdata(user);
    setIsSignIn(true);
  } */


  console.log(userData);

  const contextValue = {
    userData,
    setUserdata,
    isSignIn,
    setIsSignIn,
  };

  return (
    <LoadUserContext.Provider value={contextValue}>
      {props.children}
    </LoadUserContext.Provider>
  )
}