import "./Signup.css";
import { Link } from "react-router-dom";

import Navbar from "../smallerComponents/Navbar";

import Button from "../smallerComponents/Button";
import Input from "../smallerComponents/Input";
import { useState } from "react";

const Signup = () => {
  const [signupDetails, setSignupDetails] = useState({
    email: "",
    username: "",
    name: "",
    password1: "",
    password2: "",
  });

  const handleInputChange = (e) => {
    setSignupDetails({
      ...signupDetails,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="Signup container-1">
      <Navbar />
      <main className="container-2">
        <h1>Signup</h1>
        <p>
          Register to the platform by filling out the <span>details below</span>
          .
        </p>

        <form>
          <Input
            type="email"
            label="Email"
            name="email"
            value={signupDetails.email}
            onChange={handleInputChange}
            automComplete="off"
            minLength="5"
            maxLength="30"
            placeholder="Enter your email here"
          />

          <Input
            type="text"
            label="Username"
            name="username"
            value={signupDetails.username}
            onChange={handleInputChange}
            automComplete="off"
            minLength="1"
            maxLength="20"
            placeholder="Enter your username here"
          />

          <Input
            type="text"
            label="Name"
            name="name"
            value={signupDetails.name}
            onChange={handleInputChange}
            automComplete="off"
            minLength="1"
            maxLength="30"
            placeholder="Enter your name here"
          />

          <Input
            type="password"
            label="Password"
            name="password1"
            value={signupDetails.password1}
            onChange={handleInputChange}
            automComplete="off"
            minLength="6"
            maxLength="10"
            placeholder="Enter a password here"
          />
          
          <Input
            type="password"
            label="Confirm Password"
            name="password2"
            value={signupDetails.password2}
            onChange={handleInputChange}
            automComplete="off"
            minLength="6"
            maxLength="10"
            placeholder="Enter password again here"
          />
          <Button className="primary">Sign Up</Button>
        </form>
        <p>
          Already have an account?{" "}
          <span>
            <Link to="/login">Login here</Link>
          </span>
          .
        </p>
      </main>
    </div>
  );
};

export default Signup;
