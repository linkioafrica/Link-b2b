/* eslint-disable no-unused-vars */
import { useState } from "react";
import { BsArrowLeft, BsInfoCircle } from "react-icons/bs";
import NGN from "../../assets/flags/NGN-rectangle.svg";
import { Button } from "../../components";

const Deposit = () => {
  const [depositData, setDepositData] = useState({
    address: "",
    amount: 0,
    LINKTag: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDepositData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div className="max-w-3xl mx-auto my-2">
      <a
        href="/"
        className="flex items-center space-x-3 text-primary text-xl font-medium mb-5"
      >
        <BsArrowLeft className="text-2xl" /> <span>Go back</span>
      </a>

      <h1 className="text-black text-5xl font-semibold">Deposit</h1>

      <form action="" className="space-y-8 mt-14">
        <div className="space-y-4">
          <p className="text-gray-500 text-lg">Amount in Naira</p>
          <div className="w-full bg-white rounded-md flex space-x-20 p-3">
            <div className="flex items-center text-gray-500 font-normal text-lg space-x-3">
              <img className="w-9" src={NGN} alt="LINK Logo" />
              <p>NGN</p>
            </div>
            <input
              type="number"
              name="amount"
              id=""
              onChange={handleChange}
              className="w-full bg-white text-lg text-gray-500 rounded-md placeholder-gray-400 outline-none"
              placeholder="Enter amount"
            />
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-gray-500 text-lg">
            Stellar address or Federation account to be credited
          </p>
          <input
            type="text"
            name="address"
            id=""
            onChange={handleChange}
            className="w-full bg-white text-lg text-gray-500 p-3 rounded-md placeholder-gray-400 outline-none"
            placeholder="Enter Stellar address or Federation account"
          />
        </div>
        <div className="space-y-4">
          <p className="text-gray-500 text-lg">LINK Tag</p>
          <input
            type="text"
            name="lINKTag"
            id=""
            onChange={handleChange}
            className="w-full bg-white text-lg text-gray-500 p-3 rounded-md placeholder-gray-400 outline-none"
            placeholder="Enter LINK Tag"
          />
        </div>

        <div className="space-y-5 pt-5">
          <div className="flex items-center space-x-4">
            <BsInfoCircle className="text-primary text-2xl font-medium" />
            <p className="text-black text-lg font-medium">
              Ensure your LINK wallet has the exact amount of Naira you want to
              deposit.
            </p>
          </div>
        </div>
        <div className="space-y-5 pt-5">
          <div className="flex items-center space-x-4">
            <BsInfoCircle className="text-primary text-2xl font-medium" />
            <p className="text-black text-lg font-medium">
              If business or recipient doesn't have,{" "}
              <span>
                <a href="/" className="text-primary">
                  generate one and send.
                </a>
              </span>
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center pt-3">
          <Button
            link={"/request"}
            bgColor="bg-secondary"
            ringColor="ring-green-400"
            text="Request deposit"
            textSize="text-lg"
            paddingX="px-20"
            paddingY="py-2"
            spinner={true}
          />
        </div>
      </form>
    </div>
  );
};

export default Deposit;
