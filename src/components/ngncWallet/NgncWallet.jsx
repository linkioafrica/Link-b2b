/* eslint-disable no-unused-vars */
import { BsArrowLeft, BsChevronRight } from "react-icons/bs";
import { SiStellar } from "react-icons/si";
import { RiBankLine } from "react-icons/ri";

const BankWithdrawal = () => {
  return (
    <div className="max-w-3xl mx-auto py-10">
      <div className="">
        <a
          href="/"
          className="flex items-center space-x-3 text-primary text-xl font-medium mb-5"
        >
          <BsArrowLeft className="text-2xl" /> <span>Go back</span>
        </a>
      </div>

      <h1 className="text-black text-5xl font-semibold">Withdrawal</h1>
      <div className="space-y-10 mt-20">
        <div className="bg-white rounded-sm flex items-center justify-between p-6 cursor-pointer transition duration-300 ease-in-out hover:shadow-sm">
          <div className="flex items-center space-x-5">
            <div className="flex items-center justify-center text-primary w-[50px] h-[50px] rounded-full bg-blue-100">
              <SiStellar className="text-2xl" />
            </div>
            <div>
              <h1 className="text-black text-xl font-medium">Stellar</h1>
              <p className="text-gray-500 text-lg">
                Withdraw to a stellar address or federation address
              </p>
            </div>
          </div>
          <div>
            <BsChevronRight className="text-gray-400 text-2xl" />
          </div>
        </div>
        <div className="bg-white rounded-sm flex items-center justify-between p-6 cursor-pointer transition duration-300 ease-in-out hover:shadow-sm">
          <div className="flex items-center space-x-5">
            <div className="flex items-center justify-center text-primary w-[50px] h-[50px] rounded-full bg-blue-100">
              <RiBankLine className="text-2xl" />
            </div>
            <div>
              <h1 className="text-black text-xl font-medium">Bank account</h1>
              <p className="text-gray-500 text-lg">
                Withdraw to a bank account
              </p>
            </div>
          </div>
          <div>
            <BsChevronRight className="text-gray-400 text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankWithdrawal;
