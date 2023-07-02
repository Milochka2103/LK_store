import React from 'react';
import './Register.css';

export const Register = () => {
  return (
    <form className="br3 ba dark-grey b--black-10 mv4 w-100 w-50-m 2-25-1 mw-5 shadow-5 center">
      <main className="pa4 black-80">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">Sign up</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="firstname">
                First name
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-dark-gray hover-white w-100"
                type="text"
                name="firstname"
                id="firstname"
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
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="repeatPassword">
                Repeat password
              </label>
              <input
                className="b pa2 input-reset ba bg-transparent hover-bg-dark-gray hover-white w-100"
                type="password"
                name="repeatPassword"
                id="repeatPassword"
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
            />
          </div>
        </div>
      </main>
    </form>
  );
}
