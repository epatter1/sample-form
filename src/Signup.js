import React, { useState } from "react";
import useSignUpForm from "./CustomHooks";

const Signup = () => {
  const signup = () => {
    alert(`User Created! 
Name: ${inputs.firstName} ${inputs.lastName}
Email: ${inputs.email}`);
  };
  const { inputs, setInputs, handleInputChange, handleSubmit } = useSignUpForm(
    {
      fullName: "",
      email: "",
      phonenumber: "",
      zipcode: "",
      yes: "",
      no: "",
      password1: "",
      password2: ""
    },
    signup
  );

  return (
    <div className="section is-fullheight">
      <div className="container">
        <div className="column is-4 is-offset-4">
          <div className="box">
            <form onSubmit={handleSubmit} autoComplete="off">
              <div className="field">
                <label className="label has-text-centered">Full Name</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    name="fullName"
                    onChange={handleInputChange}
                    value={inputs.fullName}
                    required
                  />
                </div>
              </div>

              <div className="field">
                <label className="label has-text-centered">Email</label>
                <div className="control">
                  <input
                    className="input"
                    type="email"
                    name="email"
                    onChange={handleInputChange}
                    value={inputs.email}
                    required
                  />
                </div>
              </div>
              <div className="field">
                <label className="label has-text-centered">Phone #</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    name="phonenumber"
                    onChange={handleInputChange}
                    value={inputs.lastName}
                    required
                  />
                </div>
              </div>

              <div className="field">
                <label className="label has-text-centered">Zip Code</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    name="zipcode"
                    onChange={handleInputChange}
                    value={inputs.lastName}
                    required
                  />
                </div>
              </div>

              <div className="form-check">
                <label>
                  <p>Did the chicken come before the egg?</p>
                  <input
                    type="radio"
                    name="yes"
                    value={inputs.yes}
                    className="form-check-input"
                  />
                  Yes
                </label>
              </div>

              <div className="form-check">
                <label>
                  <input
                    type="radio"
                    name="no"
                    value={inputs.no}
                    className="form-check-input"
                  />
                  No
                </label>
              </div>

              <button
                className="button is-block is-fullwidth is-success"
                type="submit"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
