import React from "react";

const Login = () => {
  return (
    <div className="login-component">
      <div className="login-header">
        <h1>Login</h1>
      </div>
      <form className="login-form">
        <label for="username">Username:</label>
        <input name="username" id="username" type="text" required />
        <label for="password">Password:</label>
        <input name="password" id="password" type="password" required />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
