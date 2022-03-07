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
  Button,
} from "./components";

import { Dashboard } from "./container";

const App = () => {
  return (
    <div className="container">
      {/* <Dashboard /> */}
      <Button
        bgColor="bg-primary"
        ringColor="ring-blue-400"
        text="Request code"
        textSize="text-lg"
        paddingX="px-8"
        paddingY="py-2"
        spinner={true}
      />
    </div>
  );
};

export default App;
