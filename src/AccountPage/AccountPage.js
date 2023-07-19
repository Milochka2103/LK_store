import React from 'react';
import './AccountPage.css';
import { Navbar } from '../Navbar/Navbar';
import { Register } from '../Register/Register';
import { Route, Routes } from 'react-router-dom';
import { SignIn } from '../SignIn/SignIn';
import { NotFound } from '../NotFound/NotFound';
import { Profile } from './Profile/Profile';

export const AccountPage = ({loadUser}) => {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
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
          <Route exact path='/profile' element={<Profile />} />
          
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}
