import { useState } from "react";
import { ImSpinner2 } from "react-icons/im";

const Button = ({
  icon,
  bgColor,
  ringColor,
  text,
  textSize,
  paddingX,
  paddingY,
  spinner,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (spinner) setIsLoading(true);
  };

  return (
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
  );
};

export default Button;
