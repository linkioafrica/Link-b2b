export const Button = ({ icon, bgColor, ringColor, text, textSize }) => {
  return (
    <button
      className={`flex items-center justify-center text-white font-normal text-${textSize} rounded-lg bg-${bgColor} px-10 py-2 active:ring active:ring-${ringColor} transition duration-200 ease-out cursor-pointer ${
        icon && "space-x-2"
      }`}
    >
      <span className="text-xl ">{icon}</span>
      <span>{text}</span>
    </button>
  );
};
