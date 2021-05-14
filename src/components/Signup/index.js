import "./Signup.css";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import { useState } from "react";

import { startLoading, stopLoading, showAlert } from "../../actions/index";

import Navbar from "../smallerComponents/Navbar";
import Button from "../smallerComponents/Button";
import Input from "../smallerComponents/Input";

const mapDispatchToProps = {
  startLoading: startLoading,
  stopLoading: stopLoading,
  showAlert: showAlert,
};

const Signup = (props) => {
  const [signupDetails, setSignupDetails] = useState({
    email: "",
    username: "",
    name: "",
    password1: "",
    password2: "",
  });

  const history = useHistory();

  const handleInputChange = (e) => {
    setSignupDetails({
      ...signupDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.startLoading();
    if (signupDetails.password1 === signupDetails.password2) {
      let data = {
        ...signupDetails,
        password: signupDetails.password1,
        password1: undefined,
        password2: undefined,
      };
      axios
        .post(`${process.env.REACT_APP_API_URL}/users/`, data)
        .then((res) => {
          console.log(res);
          console.log(res.data.message);
          setSignupDetails({
            email: "",
            username: "",
            name: "",
            password1: "",
            password2: "",
          });
          props.stopLoading();
          props.showAlert(res.data.message + ", You can now login!");
          history.push("/login");
        })
        .catch((error) => {
          props.stopLoading();
          if (error.response) {
            props.showAlert(error.response.data.message);
          } else {
            props.showAlert(
              error.message + ", Please try again after some time!"
            );
          }
        });
    } else {
      props.showAlert("Passwords do not match!");
      props.stopLoading();
    }
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

export default connect(null, mapDispatchToProps)(Signup);
