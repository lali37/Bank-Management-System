import React from 'react'
import "./Home.css"
import logoImage from "./Images/LB logo.jpg";
const Home = () => {
  return (
    <div className ="home-container">
        <div className="image-container"></div>
        <div className="text-container">
            <img src={logoImage} alt="Bank logo"/>
            <h2>Welcome!</h2>
            <p>Manage your accounts, monitor balances, and track every transaction effortlessly — all in one secure platform. Designed for reliability and ease of use, it ensures a smarter, faster, and safer banking experience.</p>
            <p>From managing customer records to analyzing transactions, our system helps you make informed decisions with confidence. Stay in control of your finances while enjoying a smooth, efficient, and secure banking experience.</p>
            <p>With advanced encryption and multi-layer authentication, your data remains safe from unauthorized access. We’re committed to providing a banking experience built on trust, transparency, and complete peace of mind.</p>
            <p>Our system empowers users to access their accounts, transfer funds, and monitor transactions anytime, anywhere. With an intuitive interface and responsive design, managing your finances has never been more convenient or reliable.</p>
        </div>
    </div>
  )
}

export default Home;