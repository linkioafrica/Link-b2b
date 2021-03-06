import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Request = ({ title, info, href, responds }) => {
  const navigate = useNavigate();

  const validateRequest = () => {
    navigate(href);
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-10 w-[80%] mx-auto">
      <h1 className="text-3xl md:text-4xl text-center  font-semibold  my-8">
        {title}
      </h1>
      <div
        className={`${
          responds ? "bg-secondary" : "bg-rose-500"
        } text-white rounded-full p-3 text-6xl md:text-8xl `}
      >
        {responds ? <AiOutlineCheck /> : <AiOutlineClose />}
      </div>

      <p className="text-black text-lg text-center max-w-xl">{info}</p>

      {responds ? (
        <button
          className="bg-secondary capitalize text-white block px-10 py-2 px-5 rounded-lg "
          onClick={validateRequest}
        >
          Done
        </button>
      ) : (
        <button
          className="bg-rose-500 capitalize text-white block px-10 py-2 rounded-lg px-5"
          onClick={() => href}
        >
          Retry
        </button>
      )}
    </div>
  );
};

export default Request;
