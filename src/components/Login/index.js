import "./Login.css";

import Navbar from "../smallerComponents/Navbar";

import Button from "../smallerComponents/Button";
import Input from "../smallerComponents/Input";
import { useState } from "react";

import LoginImage1 from "../../assets/images/login-img-1.png";
import { Link } from "react-router-dom";

const Login = () => {
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setLoginDetails({
      ...loginDetails,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="Login container-1">
      <Navbar />
      <main className="container-2">
        <h1 className="heading">Login</h1>
        <p className="para">
          See what your friends are doing by loging in with your{" "}
          <span className="highlight">email and password</span>.
        </p>

        <img src={LoginImage1} alt="Friends in windows" width="100%" height="100%" />
        <form className="fillform">
          <Input
            type="email"
            label="Email"
            name="email"
            value={loginDetails.email}
            onChange={handleInputChange}
            automComplete="off"
            minLength="5"
            maxLength="30"
            placeholder="Enter your email here"
          />

          <Input
            type="password"
            label="Password"
            name="password"
            value={loginDetails.password}
            onChange={handleInputChange}
            automComplete="off"
            minLength="6"
            maxLength="10"
            placeholder="Enter your password here"
          />
          <Button className="primary">Login</Button>
        </form>
        <br/>
        <div align="center"><p className="para">Dont have an account? <span className="forgot"><Link to="/login" className="highlight">Signup here</Link></span>.<br/>
        <Link to="/forgotpassword" className="highlight">Forgot Password?</Link>.</p>
        </div>
      </main>
    </div>
  );
};

export default Login;