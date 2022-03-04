import "./Balance.css";
import country from "../../assets/flags/NGN-round.svg";

export const Balance = ({ Cur, image, amount }) => {
  return (
    <div className="balance">
      <div className="balance-currency">
        <h3>{Cur}</h3>
        <img src={country} alt="NGN" />
      </div>
      <div className="balance-amount">
        <h2>{amount}</h2>
        <p>Available balance</p>
      </div>
    </div>
  );
};
