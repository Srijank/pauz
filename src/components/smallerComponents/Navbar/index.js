import "./Navbar.css";

import { useState } from "react";
import { NavLink } from "react-router-dom";

// images
import Logo from "../../../assets/images/logo.png";
import menuIcon from "../../../assets/images/menu-icon.png";
import menuCloseIcon from "../../../assets/images/menu-close-icon.png";
import homeIcon from "../../../assets/images/home-icon.png";
import loginIcon from "../../../assets/images/login-icon.png";
import signupIcon from "../../../assets/images/signup-icon.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="Navbar container-2">
      <img src={Logo} alt="Brand Logo" />
      <div className="menu">
        <img
          className="menu-close-btn"
          onClick={() => {
            document.getElementsByClassName("menu")[0].style.width = "0";
            setIsMenuOpen(false);
          }}
          src={menuCloseIcon}
          alt="menu close"
        />
        <ul>
          <li>
            <NavLink to="/" activeClassName="active" exact>
              <img src={homeIcon} alt="home" />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" activeClassName="active" exact>
              <img src={loginIcon} alt="login" />
              Login
            </NavLink>
          </li>
          <li>
            <NavLink to="/signup" activeClassName="active" exact>
              <img src={signupIcon} alt="signup" />
              Signup
            </NavLink>
          </li>
        </ul>
      </div>

      {!isMenuOpen && (
        <img
          onClick={() => {
            document.getElementsByClassName("menu")[0].style.width = "70%";
            setIsMenuOpen(true);
          }}
          src={menuIcon}
          className="menu-btn"
          alt="menu"
        ></img>
      )}
    </div>
  );
};

export default Navbar;
