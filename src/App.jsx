/* eslint-disable no-unused-vars */
import "./App.css";

import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

import {
  Header,
  Request,
  StellarAuth,
  UserAuth,
  Usdc,
  KybSection1,
  KybSection2,
  KybSection3,
  KybSection4,
  BankWithdrawal,
  NgncWallet,
  NgncPopup,
} from "./components";

import { Dashboard, Withdrawal, Deposit, NgnAccount } from "./container";

const App = () => {
  function Redirect({ to }) {
    let navigate = useNavigate();
    useEffect(() => {
      navigate(to);
    });
    return null;
  }
  const urlPath = window.location.href;
  // console.log(urlPath);

  return (
    <div className="container">
      <Router>
        {/* If the url path is http://localhost:?/user-account the nav header will not show on app.js */}
        {urlPath === "http://localhost:3000/user-account" ? null : <Header />}
        <div className="app__body">
          <Routes>
            <Route path="/" element={<Redirect to="/authorize-withdraw" />} />
            {/* Link to withdraw Authorisation */}
            <Route
              path="/authorize-withdraw"
              element={<StellarAuth link={"/auth"} />}
            />
            {/* Link to deposit Authorisation */}
            <Route
              path="/authorize-deposit"
              element={<StellarAuth link={"/deposit"} />}
            />
            {/* Link to User Dashboard */}
            <Route path="/user-account" element={<Dashboard />} />
            {/* Link to User Login */}
            <Route path="/auth" element={<UserAuth />} />
            {/* Link to withdraw Input Page */}
            <Route path="/withdrawal" element={<Withdrawal />} />
            {/* Link to Deposit Input Page */}``
            <Route path="/deposit" element={<Deposit />} />
            {/* Link to Request page */}
            <Route
              path="/request"
              element={
                <Request
                  title="Withdrawal request received"
                  responds={true}
                  href={"/"}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
