import "./Balance.css";

export const Balance = ({ Cur, image, amount }) => {
  return (
    <div className="balance">
      <div className="balance-currency">
        <p>{Cur}</p>
        <img src={`src/assets/flags/${image}`} alt="NGN" />
      </div>
      <div className="balance-amount">
        <h2>{amount}</h2>
        <p>Available balance</p>
      </div>
    </div>
  );
};
