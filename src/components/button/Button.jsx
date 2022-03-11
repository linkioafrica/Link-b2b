/* eslint-disable no-unused-vars */
import { useState } from "react";
import { ImSpinner2 } from "react-icons/im";
import { useNavigate } from "react-router-dom";

const Button = ({
  icon,
  link,
  bgColor,
  ringColor,
  text,
  textSize,
  paddingX,
  paddingY,
  handleClick,
  spinner,
}) => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    navigate(link);
  };

  return (
    <div>
      <button
        className={`flex items-center justify-center space-x-2  transition-transform ease-in-out duration-200 text-white font-normal ${textSize} mb-4 rounded-lg ${bgColor} ${paddingX} ${
          paddingY ? paddingY : "py-1"
        } active:ring ${ringColor} transition duration-200 ease-out cursor-pointer ${
          icon && "space-x-2"
        }`}
        onClick={handleSubmit}
      >
        {icon && <span className="text-xl ">{icon}</span>}
        <span>{text}</span>
        {isLoading && <ImSpinner2 className="text-white animate-spin " />}
      </button>
    </div>
  );
};

export default Button;
