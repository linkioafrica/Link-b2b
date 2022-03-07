/* eslint-disable no-unused-vars */
import "./App.css";
import Container from "@mui/material/Container";
import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

import { Header, StellarAuth, UserAuth, Usdc } from "./components";

import { Dashboard, Withdrawal, Deposit } from "./container";

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
        {/* If the url path is http://localhost:3000/user-account the nav header will not show on app.js */}
        {urlPath === "http://localhost:3000/user-account" ? null : <Header />}

        {/* <Header /> */}
        <div className="app__body">
          <Routes>
            <Route path="/" element={<Redirect to="/authorize-withdraw" />} />

            <Route
              path="/authorize-withdraw"
              element={<StellarAuth link={"/auth"} />}
            />

            <Route
              path="/authorize-deposit"
              element={<StellarAuth link={"/deposit"} />}
            />

            <Route path="/user-account" element={<Dashboard />} />

            <Route path="/auth" element={<UserAuth />} />

            <Route path="/withdrawal" element={<Withdrawal />} />

            <Route path="/deposit" element={<Deposit />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
