import "./Header.css";

import logo from "../../assets/icons/LINK-logo.png";
import closeBtn from "../../assets/icons/close-btn.png";

const Header = () => {
  return (
    <div>
      <div className="header">
        <a href="/">
          <img className="logo" src={logo} alt="LINK Logo" />
        </a>
        <a href="/">
          <img className="close" src={closeBtn} alt="CLOSE" />
        </a>
      </div>
    </div>
  );
};

export default Header;
