/* eslint-disable no-unused-vars */
import { useState } from "react";
import { BsArrowLeft, BsX } from "react-icons/bs";
import { Button } from "..";

const KybSection2 = () => {
  const [section2Date, setSection2Data] = useState({
    mail: "",
    number: "",
    address: "",
    website: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSection2Data((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div className="max-w-3xl mx-auto my-10">
      <div className="flex items-center justify-between">
        <a
          href="/"
          className="flex items-center space-x-3 text-primary text-xl font-medium mb-5"
        >
          <BsArrowLeft className="text-2xl" /> <span>Go back</span>
        </a>
        <a
          href="/"
          className="flex items-center space-x-3 text-primary text-xl font-medium mb-5"
        >
          <span>Cancel</span>
          {/* <BsX className="text-3xl" /> */}
        </a>
      </div>

      <h1 className="text-black text-5xl font-semibold">KYB</h1>

      <form action="" className="space-y-8 mt-14">
        <div className="space-y-4">
          <p className="text-gray-500 text-lg">Business mail</p>
          <input
            type="email"
            name="mail"
            id=""
            onChange={handleChange}
            className="w-full bg-white text-lg text-gray-500 p-3 rounded-md placeholder-gray-500 outline-none"
            placeholder="Enter business mail"
          />
        </div>
        <div className="space-y-4">
          <p className="text-gray-500 text-lg">Phone number</p>
          <input
            type="text"
            name="number"
            id=""
            onChange={handleChange}
            className="w-full bg-white text-lg text-gray-500 p-3 rounded-md placeholder-gray-500 outline-none"
            placeholder="Enter phone address"
          />
        </div>
        <div className="space-y-4">
          <p className="text-gray-500 text-lg">Website</p>
          <input
            type="url"
            name="number"
            id=""
            onChange={handleChange}
            className="w-full bg-white text-lg text-gray-500 p-3 rounded-md placeholder-gray-500 outline-none"
            placeholder="Enter website URL"
          />
        </div>

        <div className="flex items-center justify-center pt-3">
          <Button
            bgColor="bg-secondary"
            ringColor="ring-green-300"
            text="Next"
            textSize="text-lg"
            paddingX="px-16"
            paddingY="py-2"
            spinner={true}
          />
        </div>
      </form>
    </div>
  );
};

export default KybSection2;
