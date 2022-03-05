import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

const Request = ({ title, info, href, responds }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-10">
      <h1 className="text-4xl font-semibold  mb-5">{title}</h1>
      <div
        className={`${
          responds ? "bg-secondary" : "bg-rose-500"
        } text-white rounded-full p-3 text-8xl `}
      >
        {responds ? <AiOutlineCheck /> : <AiOutlineClose />}
      </div>

      <p className="text-black text-lg text-center max-w-xl">{info}</p>

      {responds ? (
        <button
          className="bg-secondary capitalize text-white block px-10 py-2 rounded-lg "
          onClick={() => href}
        >
          Done
        </button>
      ) : (
        <button
          className="bg-rose-500 capitalize text-white block px-10 py-2 rounded-lg "
          onClick={() => href}
        >
          Retry
        </button>
      )}
    </div>
  );
};

export default Request;
