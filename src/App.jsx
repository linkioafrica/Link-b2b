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

const App = () => {
  return (
    <div className="container">
      <Header />

      <div className="app__body">
        <Balance width={350} cur="NGN" amount={560372.2} />

        <UserAuth />

        <StellarAuth />

        <KycAccess />

        <Usdc />

        <CreatePassword />
      </div>
    </div>
  );
};

export default App;
