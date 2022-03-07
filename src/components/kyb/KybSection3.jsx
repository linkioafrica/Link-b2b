/* eslint-disable no-unused-vars */
import { useState } from "react";
import { BsArrowLeft, BsX, BsCloudUpload } from "react-icons/bs";
import { Button } from "..";

const KybSection3 = () => {
  const [section3Date, setsection3Data] = useState({
    RCNumber: "",
    taxID: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setsection3Data((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div className="max-w-3xl mx-auto my-28">
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
          <span>Cancel</span> <BsX className="text-3xl" />
        </a>
      </div>

      <h1 className="text-black text-5xl font-semibold">KYB</h1>

      <form action="" className="space-y-8 mt-14">
        <div className="space-y-4">
          <p className="text-gray-500 text-lg">RC number</p>
          <input
            type="number"
            name="RCNumber"
            id=""
            onChange={handleChange}
            className="w-full bg-white text-lg text-gray-500 p-3 rounded-md placeholder-gray-500 outline-none"
            placeholder="Enter RC number"
          />
        </div>
        <div className="space-y-4">
          <p className="text-gray-500 text-lg">Certificate of incorporation</p>
          <div className="flex items-center justify-between w-full bg-transparent text-lg text-gray-500 p-5 rounded-md border-dashed border-gray-400 border-2">
            <div className="flex items-center space-x-5">
              <BsCloudUpload className="text-primary text-3xl" />
              <div>
                <h1 className="font-semibold text-lg text-black">
                  Drag and drop file here
                </h1>
                <p>Max file size: 10MB</p>
              </div>
            </div>
            <label
              htmlFor="certificate"
              className="cursor-pointer py-2 shadow-sm text-black px-8 rounded-md bg-white"
            >
              Browse files
            </label>
            <input
              type="file"
              name="certificate"
              id="certificate"
              onChange={handleChange}
              className="hidden"
            />
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-gray-500 text-lg">CAC status report</p>
          <div className="flex items-center justify-between w-full bg-transparent text-lg text-gray-500 p-5 rounded-md border-dashed border-gray-400 border-2">
            <div className="flex items-center space-x-5">
              <BsCloudUpload className="text-primary text-3xl" />
              <div>
                <h1 className="font-semibold text-lg text-black">
                  Drag and drop file here
                </h1>
                <p>Max file size: 10MB</p>
              </div>
            </div>
            <label
              htmlFor="certificate"
              className="cursor-pointer py-2 shadow-sm text-black px-8 rounded-md bg-white"
            >
              Browse files
            </label>
            <input
              type="file"
              name="memorandium"
              id="certificate"
              onChange={handleChange}
              className="hidden"
            />
          </div>
        </div>
        <div className="space-y-4">
          <p className="text-gray-500 text-lg">Tax ID number</p>
          <input
            type="number"
            name="taxID"
            id=""
            onChange={handleChange}
            className="w-full bg-white text-lg text-gray-500 p-3 rounded-md placeholder-gray-500 outline-none"
            placeholder="Enter Tax ID number"
          />
        </div>
        <div className="space-y-4">
          <p className="text-gray-500 text-lg">
            Memorandum and articles of association
          </p>
          <div className="flex items-center justify-between w-full bg-transparent text-lg text-gray-500 p-5 rounded-md border-dashed border-gray-400 border-2">
            <div className="flex items-center space-x-5">
              <BsCloudUpload className="text-primary text-3xl" />
              <div>
                <h1 className="font-semibold text-lg text-black">
                  Drag and drop file here
                </h1>
                <p>Max file size: 10MB</p>
              </div>
            </div>
            <label
              htmlFor="certificate"
              className="cursor-pointer py-2 shadow-sm text-black px-8 rounded-md bg-white"
            >
              Browse files
            </label>
            <input
              type="file"
              name="memorandium"
              id="certificate"
              onChange={handleChange}
              className="hidden"
            />
          </div>
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

export default KybSection3;
