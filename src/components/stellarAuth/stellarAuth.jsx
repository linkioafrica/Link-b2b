/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { PinInput } from "react-input-pin-code";
// import styled from "styled-components";

const StellarAuth = () => {
  const [values, setValues] = useState(["", "", "", ""]);
  const [pin, setPin] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

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
    // console.log(pin);
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-14 bg-white rounded-sm p-10 mx-auto max-w-xl">
      <h1 className="text-5xl text-black ">Authorisation code</h1>
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
        } bg-secondary  text-white px-20 py-2 rounded-lg text-lg block`}
        onClick={validatePin}
        disabled={isDisabled}
      >
        Submit
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
