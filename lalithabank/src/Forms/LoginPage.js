import React, { useState } from "react";
import axios from "axios";
import "./LoginPage.css";
import logoImage from "../../src/Images/LB logo.jpg";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState("");
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const handleLoginPage = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/api/login", loginData);
      navigate("/account-details");
    } catch (error) {
      console.log("Login failed", error);
      setLoginError("Invalid username or password. Please try again.");
    }
  };
  console.log(loginData);
  const handleClear = () => {
    setLoginData({
      username: "",
      password: "",
    });
  };

  return (
    <div className="login-container">
      <div className="image-login-container"></div>
      <div className="text-login-container">
        <img src={logoImage} alt="Bank logo" />
        <form onSubmit={handleLoginPage}>
          <label>Username:</label>
          <input
            type="text"
            value={loginData.username}
            onChange={(e) =>
              setLoginData({ ...loginData, username: e.target.value })
            }
            required
          />
          <label>Password:</label>
          <input
            type="password"
            value={loginData.password}
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
            maxLength={10}
            required
          />
          <h3 className="error-msg">{loginError}</h3>
          <button type="submit">Login</button>
          <button type="submit" onClick={handleClear}>
            Clear
          </button>
        </form>
        <p>Access your accounts anytime, anywhere with just a few clicks.</p>
        <p>Stay on top of your transactions and track your savings effortlessly.</p>
        <p>Your trusted partner in smart and secure banking.</p>
        <p>Experience seamless banking designed to make your financial journey easier and more efficient.</p>
      </div>
    </div>
  );
};

export default LoginPage;
