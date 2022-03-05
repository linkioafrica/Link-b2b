// import { BsDroplet } from "react-icons/bs";
import { Button, Balance, Converter } from "./components";

import "./App.css";

import { Box, Paper } from "@mui/material";
import { Activity } from "./components/activity/Activity";

const App = () => {
  return (
    <div className="container">
      <Button
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
      </Box>

      <Activity />
    </div>
  );
};

export default App;
