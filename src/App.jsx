/* eslint-disable no-unused-vars */
// import { BsDroplet } from "react-icons/bs";
import { Button } from "./components/button/Button";
import { Balance } from "./components/balance/Balance";
import { Converter } from "./components/converter/Converter";
import Navbar from "./components/navbar/Navbar";

import "./App.css";

import { Box, Paper } from "@mui/material";

const App = () => {
  return (
    <div className="container">
      <Navbar />

      {/* <Button
        text="Droplet"
        textSize="text-lg"
        bgColor="bg-secondary"
        ringColor="ring-green-300"
        // icon={<BsDroplet />}
        paddingX="px-14"
      />
      <Converter width="max-w-md" />

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 350,
            // height: 150,
          },
        }}
      >
        <Paper className="p-amount" elevation={3}>
          <Balance Cur="NGN" amount={692737.05} />
        </Paper>
      </Box> */}
    </div>
  );
};

export default App;
