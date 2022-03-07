/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { PinInput } from "react-input-pin-code";
import { Link, useNavigate, useLocation } from "react-router-dom";
// import styled from "styled-components";

const StellarAuth = () => {
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
    navigate("/auth");
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-14 bg-white rounded-md p-10 mx-auto max-w-xl shadow-md">
      <h1 className="text-4xl text-black ">Authorisation code</h1>
      <div>
        <PinInput
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
        SUBMIT
      </button>
      <p className="text-lg font-medium">
        <span className="text-black">If you do not have one, </span>
        <a href="/" className="text-primary">
          contact your platform owner
        </a>
      </p>
    </div>
  );
};

export default StellarAuth;
