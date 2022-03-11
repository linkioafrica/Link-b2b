/* eslint-disable no-unused-vars */
import { useState } from "react";
import { BsArrowLeft, BsInfoCircle } from "react-icons/bs";
import { Button, Request } from "../../components";
import { Link } from "react-router-dom";

const Withdrawal = () => {
  const [withdrawalData, setWithdrawalData] = useState({
    address: "",
    fee: 0,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setWithdrawalData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div className="max-w-3xl mx-auto my-2">
      <Link to="/auth">
        <a
          href="/"
          className="flex items-center space-x-3 text-primary text-xl font-medium mb-5"
        >
          <BsArrowLeft className="text-2xl" /> <span>Go back</span>
        </a>
      </Link>

      <h1 className="text-black text-5xl font-semibold">Withdraw NGNC</h1>

      <form action="" className="space-y-8 mt-14">
        <div className="space-y-4">
          <p className="text-gray-500 text-lg">
            Stellar address or Federation address
          </p>
          <input
            type="text"
            name="address"
            id=""
            onChange={handleChange}
            className="w-full bg-white text-lg text-gray-500 p-3 rounded-md placeholder-gray-400 outline-none"
            placeholder="Enter Stellar address or Federation address"
          />
        </div>
        <div className="bg-white text-lg text-black font-medium p-3 rounded-md inline-flex items-center">
          <input
            type="number"
            name="fee"
            id=""
            className="flex-grow font-medium placeholder-black outline-none"
            placeholder="0.00 NGN"
            onChange={handleChange}
          />
          <p>Fee</p>
        </div>

        <div className="space-y-5 pt-5">
          <div className="flex items-center space-x-4">
            <BsInfoCircle className="text-primary text-2xl font-medium" />
            <p className="text-black text-lg font-medium">
              Ensure the stellar address is the address associated with this
              account.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <BsInfoCircle className="text-primary text-2xl font-medium" />
            <p className="text-black text-lg font-medium">
              Ensure you have at least 4 XLM in your account.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center pt-3">
          <Button
            link={"/request"}
            bgColor="bg-secondary"
            ringColor="ring-green-400"
            text="Request withdrawal"
            textSize="text-lg"
            paddingX="px-10"
            paddingY="py-2"
            spinner={true}
          />
        </div>
      </form>
    </div>
  );
};

export default Withdrawal;
