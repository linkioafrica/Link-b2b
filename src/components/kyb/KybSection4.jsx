/* eslint-disable no-unused-vars */
import { useState } from "react";
import { BsArrowLeft, BsX } from "react-icons/bs";
import { Button } from "..";

const KybSection4 = () => {
  const [section4Date, setSection4Data] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSection4Data((prev) => {
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

      <h1 className="text-black text-5xl font-semibold">Directors</h1>

      <form action="" className="space-y-8 mt-14">
        <div className="space-y-4">
          <p className="text-gray-500 text-lg">
            Please identify at least 3 directors of your business
          </p>
          <div className="flex items-center space-x-10">
            <input
              type="text"
              name="mail"
              id=""
              value="Mark Growner"
              onChange={handleChange}
              className="w-full bg-white text-lg text-gray-500 p-3 rounded-md placeholder-gray-500 outline-none"
              placeholder="Name"
            />
            <button className="p-3 text-lg shadow-md rounded-md bg-white">
              Edit
            </button>
            <input
              type="number"
              name="number"
              id=""
              value="Mark Growner"
              onChange={handleChange}
              className="w-16 p-3 text-lg rounded-md bg-white outline-none"
              placeholder="0"
            />
          </div>
          <button className="py-2 px-5 text-lg shadow-md rounded-md bg-white">
            Add someone
          </button>
        </div>

        <div className="pt-10">
          <h1 className="text-black text-5xl font-semibold">Directors</h1>
          <div className="space-y-4 mt-14">
            <p className="text-gray-500 text-lg">50% ownership</p>
            <div className="flex items-center space-x-10">
              <input
                type="text"
                name="mail"
                id=""
                value="Jemma Cege"
                onChange={handleChange}
                className="w-full bg-white text-lg text-gray-500 p-3 rounded-md placeholder-gray-500 outline-none"
                placeholder="Name"
              />
              <button className="py-3 px-8 text-lg shadow-md rounded-md bg-white">
                50%
              </button>
              <input
                type="number"
                name="number"
                id=""
                value="Mark Growner"
                onChange={handleChange}
                className="w-16 p-3 text-lg rounded-md bg-white outline-none"
                placeholder="0"
              />
            </div>
            <div className="flex items-center space-x-5">
              <button className="py-2 px-5 text-lg shadow-md rounded-md bg-white">
                Add someone
              </button>
              <select
                name="businessType"
                onChange={handleChange}
                className="w-52 bg-white text-lg text-gray-500 py-2 px-3 rounded-md placeholder-gray-400 outline-none"
              >
                <option value="">Choose someone</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center pt-3">
          <Button
            bgColor="bg-secondary"
            ringColor="ring-green-300"
            text="Save"
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

export default KybSection4;
