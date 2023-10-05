import { useState } from 'react';
import './App.css';
import 'tachyons';
import { AccountPage } from './AccountPage/AccountPage';
import { BrowserRouter } from 'react-router-dom';
import { ShopContextProvider } from './context/shop-context';

const App = () => {
  const [/* route */, /* setRoute */] = useState("signin");
  const [/* id */, setId] = useState("");
  const [/* firstname */, setFirstname] = useState("");
  const [/* lastname */, setLastname] = useState("");
  const [/* isSignIn */, /* setIsSignIn */] = useState(false);

/*   const resetValues = () => {
    setFirstname("");
    setLastname("");
    setId("");
    setRoute("signin")
  }
 */
  const loadUser = (data) => {
    setId(data.id);
    setFirstname(data.firstname)
    setLastname(data.lastname);
  }

/*   const onChangeRoute = (route) => {
    if (route === 'signout') {
      resetValues();
    } else if (route === "home") {
      setIsSignIn(true);
    }
    setRoute(route)
  } */
  return (
    <div className="App">
        <BrowserRouter>
          <AccountPage loadUser={loadUser} />
        </BrowserRouter>
    </div>
  );
}

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