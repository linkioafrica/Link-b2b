import "./App.css";

import { Balance, Header, UserAuth, Request } from "./components";

const App = () => {
  return (
    <div className="container">
      <Header />
      <div className="app__body">
        <Balance Cur="NGN" amount={692737.05} width={350} />

        <UserAuth />

        <Request title={"Withdrawal not initiated"} responds="false" />
      </div>
    </div>
  );
};

export default App;
