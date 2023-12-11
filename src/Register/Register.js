import React, { useContext, useState, useEffect, useRef } from "react";
import "./Register.css";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { Profile } from "../AccountPage/Profile/Profile";
import { LoadUserContext } from "../context/load-user-context";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const USER_REGEX = /^[A-zA-Z][a-zA-Z]{2,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[A-zA-Z][a-zA-Z0-9](?=.*[@]).{4,36}$/;

export const Register = () => {
  const { loadUser } = useContext(LoadUserContext);
  const navigate = useNavigate();

  const userRef = useRef();
  const errRef = useRef();

  const [userFirstName, setUserFirstName] = useState("");
  const [validFirstName, setValidFirstName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [userLastName, setUserLastName] = useState("");
  const [validLastName, setValidLastName] = useState(false);
  const [userLastNameFocus, setUserLastNameFocus] = useState(false);

  const [userEmail, setUserEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(userFirstName);
    console.log(result);
    console.log(userFirstName);
    setValidFirstName(result);
  }, [userFirstName]);

  useEffect(() => {
    const result = USER_REGEX.test(userLastName);
    console.log(result);
    console.log(userLastName);
    setValidLastName(result);
  }, [userLastName]);

  useEffect(() => {
    const result = EMAIL_REGEX.test(userEmail);
    console.log(result);
    console.log(userEmail);
    setValidEmail(result);
  }, [userEmail]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [userFirstName, userLastName, pwd, matchPwd]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/register", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: userFirstName,
        lastname: userLastName,
        email: userEmail,
        password: pwd,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.id) {
          loadUser(user);
          navigate("/profile");
        } else {
          console.log("Incorrect entered data");
        }
      });
  };

  return (
    <section className="center">
      <p
        ref={errRef}
        className={errMsg ? "errmsg" : "offscreen"}
        aria-live="assertive"
      >
        {errMsg}
      </p>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">
          Username:
          <span className={validFirstName ? "valid" : "hide"}>
            <FontAwesomeIcon icon={faCheck} />
          </span>
          <span className={validFirstName || !userFirstName ? "hide" : "invalid"}>
            <FontAwesomeIcon icon={faTimes} />
          </span>
        </label>
        <input
          type="text"
          id="username"
          ref={userRef}
          autoComplete="off"
          onChange={(e) => setUserFirstName(e.target.value)}
          required
          aria-invalid={validFirstName ? "false" : "true"}
          aria-describedby="uidnote"
          onFocus={() => setUserFocus(true)}
          onBlur={() => setUserFocus(false)}
        />
        <p
          id="uidnote"
          className={
            userFocus && userFirstName && !validFirstName ? "instructions" : "offscreen"
          }
        >
          <FontAwesomeIcon icon={faInfoCircle} />
          3 to 24 characters.
          <br />
          Must contain only letters.
          <br />
        </p>

        <label htmlFor="lastname">
          Last name:
          <span className={validLastName ? "valid" : "hide"}>
            <FontAwesomeIcon icon={faCheck} />
          </span>
          <span className={validLastName || !userLastName ? "hide" : "invalid"}>
            <FontAwesomeIcon icon={faTimes} />
          </span>
        </label>
        <input
          type="text"
          id="lastname"
          ref={userRef}
          autoComplete="off"
          onChange={(e) => setUserLastName(e.target.value)}
          required
          aria-invalid={validLastName ? "false" : "true"}
          aria-describedby="uidnote2"
          onFocus={() => setUserLastNameFocus(true)}
          onBlur={() => setUserLastNameFocus(false)}
        />
        <p
          id="uidnote2"
          className={
            userLastNameFocus && userLastName && !validLastName
              ? "instructions"
              : "offscreen"
          }
        >
          <FontAwesomeIcon icon={faInfoCircle} />
          3 to 24 characters.
          <br />
          Must contain only letters.
          <br />
        </p>

        <label htmlFor="email">
          Email:
          <span className={validEmail ? "valid" : "hide"}>
            <FontAwesomeIcon icon={faCheck} />
          </span>
          <span className={validEmail || !userEmail ? "hide" : "invalid"}>
            <FontAwesomeIcon icon={faTimes} />
          </span>
        </label>
        <input
          type="email"
          id="email"
          ref={userRef}
          autoComplete="off"
          onChange={(e) => setUserEmail(e.target.value)}
          required
          aria-invalid={validEmail ? "false" : "true"}
          aria-describedby="uemailnote"
          onFocus={() => setEmailFocus(true)}
          onBlur={() => setEmailFocus(false)}
        />
        <p
          id="uemailnote"
          className={emailFocus && !validEmail ? "instructions" : "offscreen"}
        >
          <FontAwesomeIcon icon={faInfoCircle} />
          Incorrect email.
          <br />
        </p>
        <label htmlFor="password">
          Password:
          <span className={validPwd ? "valid" : "hide"}>
            <FontAwesomeIcon icon={faCheck} />
          </span>
          <span className={validPwd || !pwd ? "hide" : "invalid"}>
            <FontAwesomeIcon icon={faTimes} />
          </span>
        </label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPwd(e.target.value)}
          required
          aria-invalid={validPwd ? "false" : "true"}
          aria-describedby="pwdnote"
          onFocus={() => setPwdFocus(true)}
          onBlur={() => setPwdFocus(false)}
        />
        <p
          id="pwdnote"
          className={pwdFocus && !validPwd ? "instructions" : "offscreen"}
        >
          <FontAwesomeIcon icon={faInfoCircle} />
          8 to 24 characters.
          <br />
          Must include uppercase and lowercase letters, a number and a special
          character.
          <br />
          Allowed special characters:
          <span aria-label="exclamation mark">!</span>
          <span aria-label="at symbol">@</span>
          <span aria-label="hashtag">#</span>
          <span aria-label="dollar sign">$</span>
          <span aria-label="percent">%</span>
        </p>

        <label htmlFor="confirm_pwd">
          Confirm Password:
          <span className={validMatch && matchPwd ? "valid" : "hide"}>
            <FontAwesomeIcon icon={faCheck} />
          </span>
          <span className={validMatch || !matchPwd ? "hide" : "invalid"}>
            <FontAwesomeIcon icon={faTimes} />
          </span>
        </label>
        <input
          type="password"
          id="confirm_pwd"
          onChange={(e) => setMatchPwd(e.target.value)}
          required
          aria-invalid={validPwd ? "false" : "true"}
          aria-describedby="confirmnote"
          onFocus={() => setMatchFocus(true)}
          onBlur={() => setMatchFocus(false)}
        />
        <p
          id="confirmnote"
          className={matchFocus && !validMatch ? "instructions" : "offscreen"}
        >
          <FontAwesomeIcon icon={faInfoCircle} />
          Must match the first password input field.
        </p>

        <button
          disabled={
            !validFirstName || !validEmail || !validPwd || !validMatch
              ? true
              : false
          }
        >
          Sign Up
        </button>
        <p>
          Already registered?<br />
          <Link to="/signin" className="link">Sign In</Link>
        </p>
      </form>
    </section>
  );
};

/* const [firstnameRegistr, setFirstnameRegistr] = useState("");
  const [lastnameRegistr, setLastNameRegistr] = useState("");
  const [emailRegistr, setEmailRegistr] = useState("");
  const [passwordRegistr, setPasswordRegistr] = useState("");
     const [repeatedPasswordRegistr, setRepeatedPasswordRegistr] = useState("");
  
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

   const onRepeatedPasswordRegistrChange = (e) => {
    setRepeatedPasswordRegistr(e.target.value);
  };

  const isValidPassword = () => {
    if (passwordRegistr === repeatedPasswordRegistr) {
      return passwordRegistr;
    } else {
      return <h2>Password mismatch</h2>;
    }
  };

  const validatedPassword = isValidPassword();

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
 */
