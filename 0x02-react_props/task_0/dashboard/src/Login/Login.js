import React, { Fragment } from 'react';
import './Login.css';

function Login() {
  return (
    <Fragment>
      <div className="login-container">
        <h2>Login</h2>
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit" className="login-btn">Login</button>
        </form>
      </div>
    </Fragment>
  );
}

export default Login;
