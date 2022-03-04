export const Button = ({
  icon,
  bgColor,
  ringColor,
  text,
  textSize,
  paddingX,
}) => {
  return (
    <button
      className={`flex items-center justify-center text-white font-normal ${textSize} rounded-lg ${bgColor} ${paddingX} py-2 active:ring ${ringColor} transition duration-200 ease-out cursor-pointer ${
        icon && "space-x-2"
      }`}
    >
      {icon && <span className="text-xl ">{icon}</span>}
      <span>{text}</span>
    </button>
  );
};
