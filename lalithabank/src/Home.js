import React from "react";
import "./Home.css";
import logoImage from "./Images/logo.jpg";
const Home = () => {
  return (
    <div className="home-container">
      <div className="image-container"></div>
      <div className="text-container">
      <img src={logoImage} alt="Hema Coding Bank logo"/>


      
      <h2>Welcome!</h2>
      <p>
        Experience seamless transactions with our user-friendly interface.
        Our dedicated support team is available 24/7 to assist you with any inquiries or
        concerns.
      </p>
      <p>
        Enhance your financial journey with our competitive interest rates on
        savings accounts. We believe in rewarding our users, so enjoy perks and
        bonuses as you grow your savings with Coding Bank.
      </p>
      <p>
        Security is our top priority. Rest assured that your personal and
        financial information is protected using state-of-the-art encryption
        technologies.
      </p>
      <p>
        Coding Bank - Where coding meets banking excellence. Start your journey
        with us today and experience a new era of online banking designed for
        developers like you.
      </p>
      </div>
    </div>
  );
};

export default Home;