import "./Navbar.css";

import logo from "../../assets/flags/LINK-logo.png";
import home from "../../assets/icons/home.svg";
import profile from "../../assets/icons/profile.png";
import help from "../../assets/icons/help.png";
import logout from "../../assets/icons/logout.png";

import Navlink from "./navlink/Navlink";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="LINK Logo" />
      <Navlink image={home} text={"Dashboard"} />
      <div className="navbar-bottom">
        <Navlink image={profile} text={"Profile "} />
        <Navlink image={help} text={"Help"} />
        <Navlink image={logout} text={"Logout"} />
      </div>
    </div>
  );
};

export default Navbar;
