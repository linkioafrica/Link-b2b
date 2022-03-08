/* eslint-disable no-unused-vars */
import { useState } from "react";
import { BsArrowLeft, BsX } from "react-icons/bs";
import { Button } from "..";

const KybSection1 = () => {
  const [section1Date, setSection1Data] = useState({
    country: "",
    industry: "",
    category: "",
    businessName: "",
    businessSize: "",
    description: "",
    businessType: "",
    legalName: "",
    registrationType: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSection1Data((prev) => {
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
          <p className="text-gray-500 text-lg">Country</p>
          <input
            type="text"
            name="country"
            id=""
            onChange={handleChange}
            className="w-full bg-white text-lg text-gray-500 p-3 rounded-md placeholder-gray-500 outline-none"
            placeholder="Nigeria"
          />
        </div>
        <div className="space-y-4">
          <p className="text-gray-500 text-lg">Industry</p>
          <select
            name="industry"
            onChange={handleChange}
            className="w-full bg-white text-lg text-gray-500 p-3 rounded-md placeholder-gray-400 outline-none"
          >
            <option value="">Select industry</option>
          </select>
        </div>
        <div className="space-y-4">
          <p className="text-gray-500 text-lg">Category</p>
          <select
            name="category"
            onChange={handleChange}
            className="w-full bg-white text-lg text-gray-500 p-3 rounded-md placeholder-gray-400 outline-none"
          >
            <option value="">Select category</option>
          </select>
        </div>
        <div className="space-y-4">
          <p className="text-gray-500 text-lg">
            Name of business (Trading name)
          </p>
          <input
            type="text"
            name="businessName"
            id=""
            onChange={handleChange}
            className="w-full bg-white text-lg text-gray-500 p-3 rounded-md placeholder-gray-500 outline-none"
            placeholder="Enter name of business"
          />
        </div>
        <div className="space-y-4">
          <p className="text-gray-500 text-lg">Size of business</p>
          <select
            name="businessSize"
            onChange={handleChange}
            className="w-full bg-white text-lg text-gray-500 p-3 rounded-md placeholder-gray-400 outline-none"
          >
            <option value="">Select Select size</option>
          </select>
        </div>
        <div className="space-y-4">
          <p className="text-gray-500 text-lg">Description</p>
          <input
            type="text"
            name="description"
            id=""
            onChange={handleChange}
            className="w-full bg-white text-lg text-gray-500 p-3 rounded-md placeholder-gray-500 outline-none"
            placeholder="Enter description"
          />
        </div>
        <div className="space-y-4">
          <p className="text-gray-500 text-lg">Business type</p>
          <select
            name="businessType"
            onChange={handleChange}
            className="w-full bg-white text-lg text-gray-500 p-3 rounded-md placeholder-gray-400 outline-none"
          >
            <option value="">Select business type</option>
          </select>
        </div>
        <div className="space-y-4">
          <p className="text-gray-500 text-lg">Legal name of business</p>
          <input
            type="text"
            name="legalName"
            id=""
            onChange={handleChange}
            className="w-full bg-white text-lg text-gray-500 p-3 rounded-md placeholder-gray-500 outline-none"
            placeholder="Enter legal name of business"
          />
        </div>
        <div className="space-y-4">
          <p className="text-gray-500 text-lg">Registration type</p>
          <select
            name="registrationType"
            onChange={handleChange}
            className="w-full bg-white text-lg text-gray-500 p-3 rounded-md placeholder-gray-400 outline-none"
          >
            <option value="">Select registration type</option>
          </select>
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

export default KybSection1;
