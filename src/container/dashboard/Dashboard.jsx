/* eslint-disable no-unused-vars */
import "./Dashboard.css";

import { Navbar, Balance, Converter, Activity } from "../../components";
import { useState } from "react";

const Dashboard = () => {
  const [profileName, setProfileName] = useState("Akara Box");
  return (
    <div className="dashboard__container">
      <div className="dashboard__nav">
        <Navbar />
      </div>
      <div className="dashboard__page">
        <div className="dashboard__profile">
          <h1 className="dashboard__header">Hi, {profileName}</h1>
        </div>
        <div className="dashboard__account">
          <div className="dashboard__money">
            <Balance width={"80%"} cur="NGN" amount={560372.2} />
            <Converter width={"w-4/5"} />
          </div>
          <div className="dashboard__activity">
            <Activity />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
