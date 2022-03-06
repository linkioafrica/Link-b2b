const Button = ({
  icon,
  bgColor,
  ringColor,
  text,
  textSize,
  paddingX,
  paddingY,
}) => {
  return (
    <button
      className={`flex items-center justify-center text-white font-normal ${textSize} mb-4 rounded-lg ${bgColor} ${paddingX} ${
        paddingY ? paddingY : "py-1"
      } active:ring ${ringColor} transition duration-200 ease-out cursor-pointer ${
        icon && "space-x-2"
      }`}
    >
      {icon && <span className="text-xl ">{icon}</span>}
      <span>{text}</span>
    </button>
  );
};

export default Button;
