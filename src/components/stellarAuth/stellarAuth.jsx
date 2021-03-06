/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { PinInput } from "react-input-pin-code";
import { Link, useNavigate, useLocation } from "react-router-dom";
// import styled from "styled-components";

const StellarAuth = ({ link }) => {
  const [values, setValues] = useState(["", "", "", ""]);
  const [pin, setPin] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setPin(verifyPin());

    if (pin.length === 4) setIsDisabled(false);
    else setIsDisabled(true);

    return () => {};
  }, [values, pin]);

  const verifyPin = () => {
    return values.join("");
  };

  const validatePin = () => {
    navigate(link);
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-12 bg-white rounded-md p-10 max-w-xl shadow-sm w-[80%] mx-auto">
      <h1 className="text-3xl text-black ">Authorisation code</h1>
      <div>
        <PinInput
          inputStyle={{
            borderRadius: "5px",
            border: "1px solid",
            margin: "0px 15px",
            width: "50px",
            height: "50px",
          }}
          values={values}
          placeholder=""
          onComplete={verifyPin}
          onChange={(value, index, values) => setValues(values)}
        />
      </div>
      <button
        className={`${
          isDisabled ? "cursor-not-allowed bg-opacity-70" : "cursor-pointer"
        } bg-secondary text-white px-20 py-1 rounded-md text-md block`}
        onClick={validatePin}
        disabled={isDisabled}
      >
        Submit
      </button>
      <p className="text-base md:text-lg font-medium text-center">
        <span className="text-black">If you do not have one, </span>
        <a href="/" className="text-primary">
          contact your platform owner
        </a>
      </p>
    </div>
  );
};

export default StellarAuth;
