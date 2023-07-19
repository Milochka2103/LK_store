import React, { useState } from 'react';
import './Register.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Profile } from '../AccountPage/Profile/Profile';

export const Register = ({ loadUser, onChangeRoute }) => {
  const [firstnameRegistr, setFirstnameRegistr] = useState("");
  const [lastnameRegistr, setLastNameRegistr] = useState("");
  const [emailRegistr, setEmailRegistr] = useState("");
  const [passwordRegistr, setPasswordRegistr] = useState("");
  /*   const [repeatedPasswordRegistr, setRepeatedPasswordRegistr] = useState(""); */
  
  const navigate = useNavigate()

  const onFisrtNameChange = (e) => {
    setFirstnameRegistr(e.target.value);
  };

  const onLastNameChange = (e) => {
    setLastNameRegistr(e.target.value);
  };

  const onEmailChange = (e) => {
    setEmailRegistr(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPasswordRegistr(e.target.value);
  };

/*   const onRepeatedPasswordRegistrChange = (e) => {
    setRepeatedPasswordRegistr(e.target.value);
  };

  const isValidPassword = () => {
    if (passwordRegistr === repeatedPasswordRegistr) {
      return passwordRegistr;
    } else {
      return <h2>Password mismatch</h2>;
    }
  };

  const validatedPassword = isValidPassword(); */

  const onSubmitRegistr = () => {
    fetch("http://localhost:3000/register", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: firstnameRegistr,
        lastname: lastnameRegistr,
        email: emailRegistr,
        password: passwordRegistr,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.id) {
          loadUser(user);
          navigate('/profile')
        } else {
          console.log("Incorrect entered data");
        }
      });
  };

  return (
    <>
      <article className="br3 ba dark-grey b--black-10 mv4 w-100 w-50-m 2-25-1 mw-5 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0 font">Sign up</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="firstname">
                  First name
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-dark-gray hover-white w-100"
                  type="text"
                  name="firstname"
                  id="firstname"
                  onChange={onFisrtNameChange}
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="name">
                  Last name
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-dark-gray hover-white w-100"
                  type="text"
                  name="lastname"
                  id="lastname"
                  onChange={onLastNameChange}
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">
                  Email
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-dark-gray hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={onEmailChange}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">
                  Password
                </label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-dark-gray hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                  onChange={onPasswordChange}
                />
              </div>
              <label className="pa0 ma0 lh-copy f6 pointer">
                <input type="checkbox" /> Remember me
              </label>
            </fieldset>
            <div className="">
              <input
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Sign up"
                onClick={onSubmitRegistr}
              />
            </div>
          </div>
        </main>
      </article>
      <Routes>
      <Route exact path="/profile" element={<Profile />} /></Routes>
    </>
  );
};
