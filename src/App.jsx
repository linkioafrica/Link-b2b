/* eslint-disable no-unused-vars */
import "./App.css";

import {
  Balance,
  Header,
  UserAuth,
  KycAccess,
  Usdc,
  StellarAuth,
  CreatePassword,
} from "./components";

import { Dashboard, Withdrawal } from "./container";

const App = () => {
  return (
    <div className="container">
      {/* <Dashboard /> */}
      <Withdrawal />
    </div>
  );
};

export default App;
