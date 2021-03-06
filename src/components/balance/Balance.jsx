import "./Balance.css";
import country from "../../assets/flags/NGN-round.svg";

import { Box, Paper } from "@mui/material";

const Balance = ({ cur, image, amount, width }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: "auto",
          width: width,
        },
      }}
    >
      <Paper className="p-amount" elevation={1}>
        <div className="balance">
          <div className="balance-currency">
            <h3>{cur}</h3>
            <img src={country} alt="NGN" />
          </div>
          <div className="balance-amount">
            <h2>{amount}</h2>
            <p>Available balance</p>
          </div>
        </div>
      </Paper>
    </Box>
  );
};
export default Balance;
