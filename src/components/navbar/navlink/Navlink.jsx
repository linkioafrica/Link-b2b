import "./Navlink.css";

const Navlink = ({ image, text }) => {
  return (
    <div className="navbar-links">
      <img src={image} alt="Home" />
      <p> {text} </p>
    </div>
  );
};

export default Navlink;
