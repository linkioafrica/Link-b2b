/* eslint-disable no-unused-vars */
import "./App.css";

import { Balance, Header, UserAuth, KycAccess, Usdc } from "./components";

const App = () => {
  return (
    <div className="container">
      <Header />
      <div className="app__body">
        <Balance Cur="NGN" amount={692737.05} width={350} />

        <UserAuth />

        <KycAccess />

        {/* <Usdc /> */}
      </div>
    </div>
  );
};

export default App;
