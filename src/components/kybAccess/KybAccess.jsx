import { useState } from "react";
import { Button } from "../../components";

const KybAccess = () => {
  const [kybAccess, setKybAccess] = useState({
    businessName: "",
    email: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setKybAccess((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-12 bg-white rounded-md p-10 max-w-xl shadow-sm w-[80%] mx-auto">
      <h1 className="text-black text-5xl font-semibold my-5">
        Request KYB access
      </h1>
      <form>
        <div className="space-y-4">
          <p className="text-gray-500 text-lg">Business name</p>
          <input
            type="text"
            name="businessName"
            id=""
            onChange={handleChange}
            className="w-full bg-white text-lg text-gray-500 p-3 rounded-md placeholder-gray-400 outline-none"
            placeholder="Enter business name"
          />
        </div>
        <div className="space-y-4">
          <p className="text-gray-500 text-lg">Contact mail</p>
          <input
            type="email"
            name="email"
            id=""
            onChange={handleChange}
            className="w-full bg-white text-lg text-gray-500 p-3 rounded-md placeholder-gray-400 outline-none"
            placeholder="Enter email address"
          />
        </div>

        <div className="flex items-center justify-center pt-3">
          <Button
            link={"/"}
            bgColor="bg-secondary"
            ringColor="ring-green-400"
            text="continue"
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

export default KybAccess;
