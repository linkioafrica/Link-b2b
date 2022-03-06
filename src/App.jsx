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

import { Dashboard } from "./container";

const App = () => {
  return (
    <div className="container">
      <Dashboard />
    </div>
  );
};

export default App;
