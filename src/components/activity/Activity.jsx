import "./Activity.css";
import { Send } from "./Send";
import { Receive } from "./Receive";

const Activity = () => {
  return (
    <div className="rounded-lg bg-white py-5 px-7 max-w-lg ">
      <h1 className="relative text-primary font-semibold text-lg pb-2 heading">
        Activity
      </h1>
      <hr className="border border-gray-300 " />
      <div className=" pt-2 activities relative">
        <Receive />
        <Send />
        <Receive />
        <Send />
        <Receive />
        <Receive />
      </div>
    </div>
  );
};
export default Activity;
