import { BsArrowDownLeft } from "react-icons/bs";

export const Receive = () => {
  return (
    <div className="flex items-center justify-between py-3 relative">
      <div className="rounded-full bg-blue-200 p-2">
        <BsArrowDownLeft className="text-secondary text-lg" />
      </div>
      <div className="flex items-center justify-between space-x-16">
        <div className="text-lg font-medium text-black">DTransfer</div>
        <div className="text-base text-gray-500">Feb 11 2022</div>
        <div className="text-lg font-medium text-black">110.98 NGNC</div>
      </div>
    </div>
  );
};
