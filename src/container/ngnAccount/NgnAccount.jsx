/* eslint-disable no-unused-vars */
import "../dashboard/Dashboard.css";
import "./NgnAccount.css";
import { BsArrowLeft } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Navbar } from "../../components";
import { Button } from "../../components";
import { useState } from "react";

const NgnAccount = () => {
  const [balance, setBalance] = useState("692,737.05");
  return (
    <div className="dashboard__container">
      <div className="dashboard__nav">
        <Navbar />
      </div>
      <div className=" p-20">
        <div className="block text-right mb-10">
          <div className="bg-white inline-flex py-2 px-5 rounded-md">
            <div className="flex items-center space-x-3">
              <FaUserCircle className="text-3xl" />
              <h1 className="text-black text-xl font-medium">Akara Box</h1>
            </div>
          </div>
        </div>
        <div className="">
          <a
            href="/"
            className="flex items-center space-x-3 text-primary text-xl font-medium mb-5"
          >
            <BsArrowLeft className="text-2xl" />{" "}
            <span>Go back to dashboard</span>
          </a>
          <h1 className="text-black text-4xl font-semibold">
            Your NGN account details
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 mt-20">
          <div>
            <div className="flex items-center justify-between mt-10 ">
              <div className="space-y-1">
                <h1 className="text-black text-5xl font-semibold">
                  {`₦ ${balance}`}
                </h1>
                <p className="text-gray-500 text-lg">Nigerian Naira</p>
              </div>
            </div>
            <div className="flex items-center space-x-10 my-10">
              <Button
                icon={<IoIosAddCircleOutline />}
                bgColor="bg-secondary"
                ringColor="ring-green-300"
                text="Deposit"
                textSize="text-lg"
                paddingX="px-10"
                paddingY="py-3"
              />
              <Button
                icon={<IoIosAddCircleOutline />}
                bgColor="bg-black"
                ringColor="ring-gray-500"
                text="Withdraw"
                textSize="text-lg"
                paddingX="px-10"
                paddingY="py-3"
              />
            </div>
          </div>
          <div className="space-y-5">
            <div className="row">
              <p className="text-gray-500 text-lg">Account holder</p>
              <h1 className="text-black text-lg font-semibold capitalize">
                Akara Box
              </h1>
            </div>
            <div className="row">
              <p className="text-gray-500 text-lg">Bank name</p>
              <h1 className="text-black text-lg font-semibold capitalize">
                Wema Bank PLC
              </h1>
            </div>
            <div className="row">
              <p className="text-gray-500 text-lg">Account number</p>
              <h1 className="text-black text-lg font-semibold capitalize">
                0247468802
              </h1>
            </div>
            <div className="row">
              <p className="text-gray-500 text-lg">Bank address</p>
              <h1 className="text-black text-lg font-semibold capitalize">
                54 marina, lagos island lagos state, nigera
              </h1>
            </div>
            <div className="row">
              <p className="text-gray-500 text-lg">Account type</p>
              <h1 className="text-black text-lg font-semibold capitalize">
                savings account
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NgnAccount;
