import "./Activity.css";
import { Send } from "./Send";
import { Recieve } from "./Recieve";

export const Activity = () => {
  return (
    <div className="rounded-lg bg-white py-5 px-7 max-w-lg ">
      <h1 className="relative text-primary font-semibold text-lg pb-2 heading">
        Activity
      </h1>
      <hr className="border border-gray-300 " />
      <div className=" pt-2 activities relative">
        <Recieve />
        <Send />
        <Recieve />
        <Send />
        <Recieve />
        <Recieve />
      </div>
    </div>
  );
};
