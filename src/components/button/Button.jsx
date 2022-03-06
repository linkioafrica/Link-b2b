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
  return (
    <button
      className={`flex items-center justify-center space-x-2 text-white font-normal ${textSize} mb-4 rounded-lg ${bgColor} ${paddingX} ${
        paddingY ? paddingY : "py-1"
      } active:ring ${ringColor} transition duration-200 ease-out cursor-pointer ${
        icon && "space-x-2"
      }`}
    >
      {icon && <span className="text-xl ">{icon}</span>}
      <span>{text}</span>
      {spinner && <ImSpinner2 className="text-white animate-spin " />}
    </button>
  );
};

export default Button;
