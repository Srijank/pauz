import "./Login.css";

import { useState } from "react";
import { Link } from "react-router-dom";
import { showAlert, startLoading, stopLoading } from "../../actions/index";
import { connect } from "react-redux";
import axios from "axios";

import Navbar from "../smallerComponents/Navbar";
import Button from "../smallerComponents/Button";
import Input from "../smallerComponents/Input";

import LoginImage1 from "../../assets/images/login-img-1.png";

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {
  showAlert: showAlert,
  startLoading: startLoading,
  stopLoading: stopLoading,
};

const Login = (props) => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    props.startLoading();
    axios
      // .post(`${process.env.REACT_APP_API_URL}/users/login`, signinData)
      .post(`http://localhost:5000/api/users/login`, loginDetails)
      .then(
        (response) => {
          localStorage.setItem("token", response.data.token);
          props.stopLoading();
          window.location.reload(false);
        },
        (error) => {
          props.stopLoading();
          if (error.response) {
            props.showAlert(error.response.data.message);
          } else {
            props.showAlert(error.message);
          }
        }
      );
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
        <form onSubmit={handleSubmit} className="fillform">
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
        <div align="center"><p className="para">Dont have an account? <span className="forgot"><Link to="/Signup" className="highlight">Signup here</Link></span>.<br/>
        <Link to="/forgotpassword" className="highlight">Forgot Password?</Link>.</p>
        </div>
      </main>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);