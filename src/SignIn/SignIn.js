import React, { useContext, useEffect, useState } from "react";
import "./SignIn.css";
import { Link, useNavigate } from "react-router-dom";
import { LoadUserContext } from "../context/load-user-context";

export const SignIn = () => {
  const { setUserdata, setIsSignIn } = useContext(LoadUserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignin = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Login failed");
        }
        return response.json();
      })
      .then((user) => {
        if (user.id) {
          const expirationDate = new Date();
          expirationDate.setDate(expirationDate.getDate()+1)
          document.cookie = `userData=${encodeURIComponent(
            JSON.stringify(user)
          )}; expires=${expirationDate.toUTCString()}; path=/`;
          setUserdata(user);
          setIsSignIn(true);
          navigate("/profile");
        }
      })
      .catch((error) => {
        console.error("Error during login", error.message);
      });
  };

  return (
    <article className="br3 ba b--black-10 mv4 w-100 w-50-m 2-25-1 mw-5 shadow-5 center">
      <main className="pa4 black-80">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0 font">Sign in</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">
                Email
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-gray hover-white w-100"
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
                className="b pa2 input-reset ba bg-transparent hover-bg-gray hover-bg-black hover-white w-100"
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
              value="Sign in"
              onClick={handleSignin}
            />
          </div>
          <div className="lh-copy mt3">
            <Link to="/register" className="f6 link dim black db pointer">
              Sign up
            </Link>
            {/* <a href="#0" className="f6 link dim black db">Forgot your password?</a> */}
          </div>
        </div>
      </main>
    </article>
  );
};
