// import { BsDroplet } from "react-icons/bs";
import { Button } from "./components/button/Button";
import { Balance } from "./components/balance/Balance";
import { Converter } from "./components/converter/Converter";

import "./App.css";

import Paper from "@mui/material/Paper";

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

      <Paper className="pagination" elevation={3}>
        <Balance />
      </Paper>
    </div>
  );
};

export default App;
