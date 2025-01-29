import React, { useEffect, useState } from "react";
import "./from.css";

const Form = () => {
  const [userDetails, setUserDetails] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
    confirmpassword: ''
  });

  const [userErr, setUserErr] = useState({
    nameErr: false,
    lastnameErr: false,
    emailErr: false,
    passwordErr: false,
    confirmPasswordErr: false
  });

  const [formSubmitted, setFormSubmitted] = useState(false); // Add state for form submission
  
  const signInHandler = (e) => {
    e.preventDefault();
    if (userDetails.name === '' && userDetails.lastName === '' && userDetails.email === '' && userDetails.password === '' && userDetails.confirmpassword === '') {
      setUserErr({
        nameErr: true,
        lastnameErr: true,
        emailErr: true,
        passwordErr: true,
        confirmPasswordErr: true
      });
    } else {
      setFormSubmitted(true);  // Mark form as submitted
    }
    console.log(userDetails);
  };

  useEffect(() => {
    if (userDetails.name !== '') {
      setUserErr({ ...userErr, nameErr: false });
    }
    if (userDetails.lastName !== '') {
      setUserErr({ ...userErr, lastnameErr: false });
    }
    if (userDetails.email !== '') {
      setUserErr({ ...userErr, emailErr: false });
    }
    if (userDetails.password !== '') {
      setUserErr({ ...userErr, passwordErr: false });
    }
    if (userDetails.confirmpassword !== '') {
      setUserErr({ ...userErr, confirmPasswordErr: false });
    }
  }, [userDetails]);

  return (
    <div className="control-from">
      <main className="form-signin w-100 m-auto fs-5 text-primary">
        {/* Conditionally render the form or a success message */}
        {!formSubmitted ? (
          <form onSubmit={signInHandler}>
            <h1 className="h3 mb-5 fw-normal">Please sign in</h1>
            <label htmlFor="floatingInput">First Name:</label>
            <div className="form-floating mb-3 ">
              <input
                type="text"
                style={{
                  border: userErr.nameErr && '3px solid red'
                }}
                className="form-control"
                id="floatingText"
                value={userDetails.name}
                placeholder="name"
                onChange={(e) => {
                  setUserDetails({ ...userDetails, name: e.target.value });
                }}
              />
              {userErr.nameErr && (<span className="text-danger fs-6 fw-semibold">Enter your name</span>)}
            </div>
            <label htmlFor="floatingInput ">Last Name:</label>
            <div className="form-floating mb-3">
              <input
                type="text"
                style={{
                  border: userErr.lastnameErr && '3px solid red'
                }}
                className="form-control"
                id="floatingText"
                value={userDetails.lastName}
                placeholder="name"
                onChange={(e) => {
                  setUserDetails({ ...userDetails, lastName: e.target.value });
                }}
              />
              {userErr.lastnameErr && (<span className="text-danger fs-6 fw-semibold">Enter your last name</span>)}
            </div>
            <label htmlFor="floatingInput">Email address:</label>
            <div className="form-floating mb-3">
              <input
                type="email"
                style={{
                  border: userErr.emailErr && '3px solid red'
                }}
                className="form-control"
                id="floatingInput"
                value={userDetails.email}
                placeholder="name@example.com"
                onChange={(e) => {
                  setUserDetails({ ...userDetails, email: e.target.value });
                }}
              />
              {userErr.emailErr && (<span className="text-danger fs-6 fw-semibold">Enter your email</span>)}
            </div>
            <label htmlFor="floatingPassword">Password:</label>
            <div className="form-floating mb-3">
              <input
                type="password"
                style={{
                  border: userErr.passwordErr && '3px solid red'
                }}
                className="form-control"
                id="floatingPassword"
                value={userDetails.password}
                placeholder="Password"
                onChange={(e) => {
                  setUserDetails({ ...userDetails, password: e.target.value });
                }}
              />
              {userErr.passwordErr && (<span className="text-danger fs-6 fw-semibold">Enter your password</span>)}
            </div>
            <label htmlFor="floatingPassword">Confirm Password:</label>
            <div className="form-floating">
              <input
                type="password"
                style={{
                  border: userErr.confirmPasswordErr && '3px solid red'
                }}
                className="form-control"
                id="floatingPassword"
                value={userDetails.confirmpassword}
                placeholder="Confirm Password"
                onChange={(e) => {
                  setUserDetails({ ...userDetails, confirmpassword: e.target.value });
                }}
              />
              {userErr.confirmPasswordErr && (<span className="text-danger fs-6 fw-semibold">Enter your confirm password</span>)}
            </div>

            <button className="w-100 mt-5 btn btn-lg btn-primary" type="submit">
              Sign in
            </button>
            <p className="mt-5 mb-3 text-muted">&copy; 2022–2024</p>
          </form>
        ) : (
          <div className="success-message">
            <h2>Form Submitted Successfully!</h2>
            <p>Thank you for signing in.</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default Form;
