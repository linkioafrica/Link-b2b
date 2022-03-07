import { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Button } from "../../components";

const Profile = ({ bussinessName, LINKTag, email }) => {
  const [profileData, setProfileData] = useState({
    bussinessName: bussinessName,
    email: email,
    LINKTag: LINKTag,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProfileData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div className="max-w-6xl mx-auto my-28">
      <a
        href="/"
        className="flex items-center space-x-3 text-primary text-xl font-medium mb-5"
      >
        <BsArrowLeft className="text-2xl" /> <span>Go back</span>
      </a>

      <h1 className="text-black text-5xl font-semibold">Profile</h1>
      <p className="text-gray-500 text-lg">Update your personal details here</p>

      <form action="" className="space-y-8 mt-14">
        <div className="space-y-4">
          <p className="text-gray-500 text-lg">Business name</p>
          <input
            type="text"
            name="bussinessName"
            id=""
            onChange={handleChange}
            className="w-full bg-white text-lg text-black p-3 rounded-md placeholder-black font-semibold outline-none"
            value={profileData.bussinessName}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 items-center">
          <div className="space-y-4">
            <p className="text-gray-500 text-lg">LINK Tag</p>
            <input
              type="text"
              name="lINKTag"
              id=""
              onChange={handleChange}
              className="w-full bg-white text-lg text-black p-3 rounded-md placeholder-black font-semibold outline-none"
              value={profileData.LINKTag}
            />
          </div>
          <div className="space-y-4">
            <p className="text-gray-500 text-lg">Email</p>
            <input
              type="text"
              name="email"
              id=""
              onChange={handleChange}
              className="w-full bg-white text-lg text-black p-3 rounded-md placeholder-black font-semibold outline-none"
              value={profileData.email}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 items-center">
          <div className="space-y-2">
            <h1 className="text-black text-3xl font-semibold">
              Update password
            </h1>
            <p className="text-gray-500 text-lg">
              Change your current password to a new one
            </p>
          </div>
          <div className=" lg:justify-self-end">
            <Button
              bgColor="bg-secondary"
              ringColor="ring-green-500"
              text="Change password"
              textSize="text-lg"
              paddingX="px-10"
              paddingY="py-2"
              spinner={true}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Profile;
