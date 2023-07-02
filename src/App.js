import { useState } from 'react';
import './App.css';
import { SignIn } from './SignIn/SignIn';
import 'tachyons';
import { Register } from './Register/Register';
import { AccountPage } from './AccountPage/AccountPage';
/* import { Navigation } from './Navigation/Navigation'; */

const App = () => {
  const [isSignIn, setIsSignIn] = useState(false)
  return (
  <>
  {/* <Navigation /> */}
    <div className="App">
      {
        isSignIn ?
            // <SignIn />
            <AccountPage />
          : <Register />
      }
      </div>
    </>
  );
}

export default App;