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
        <h1>Login</h1>
        <p>
          See what your friends are doing by loging in with your{" "}
          <span>email and password</span>.
        </p>

        <img src={LoginImage1} alt="Friends in windows" />
        <form>
          <Input
            type="email"
            label="Email"
            name="email"
            value={loginDetails.email}
            onChange={handleInputChange}
            automComplete="off"
            minLength="5"
            maxLength="30"
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
          />
          <Button className="primary">Login</Button>
        </form>
        <p>Already have an account? <span><Link to="/login">Login here</Link></span>.</p>
        <Link to="/forgotpassword">Forgot Password?</Link>
      </main>
    </div>
  );
};

export default Login;
