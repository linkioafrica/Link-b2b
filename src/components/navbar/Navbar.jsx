import "./Navbar.css";

import logo from "../../assets/icons/LINK-logo.png";
import home from "../../assets/icons/home.svg";
import profile from "../../assets/icons/profile.png";
import help from "../../assets/icons/help.png";
import logout from "../../assets/icons/logout.png";

import Navlink from "./navlink/Navlink";

const Navbar = () => {
  return (
    <div className="navbar">
      <a href="/">
        <img
          style={{
            height: "2rem",
            margin: "0px auto 50px auto",
          }}
          src={logo}
          alt="LINK Logo"
        />
      </a>
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
