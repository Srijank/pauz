import "./Navbar.css";

// images
import Logo from "../../../assets/images/logo.png";
import menuIcon from "../../../assets/images/menu-icon.png";

const Navbar = () => {
  return (
    <div className="Navbar container-2">
      <img src={Logo} alt="Brand Logo" />
      <div>
        <img src={menuIcon} alt="menu button" />
      </div>
    </div>
  )
}

export default Navbar;