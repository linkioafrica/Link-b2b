import { useState } from "react";
import { PinInput } from "react-input-pin-code";
import styled from "styled-components";

const StellarAuth = () => {
  const [values, setValues] = useState(["", "", "", ""]);

  return (
    <div className="flex flex-col items-center justify-center space-y-16 bg-white rounded-sm p-10 mx-auto max-w-xl">
      <h1 className="text-5xl text-black font-semibold">Authorisation code</h1>
      <div>
        <PinInput
          values={values}
          placeholder=""
          onChange={(value, index, values) => setValues(values)}
        />
      </div>
      <button className="bg-secondary text-white px-20 py-2 rounded-lg text-lg block">
        Submit
      </button>
      <p className="text-lg font-medium">
        <span className="text-black">If you do not have one, </span>
        <span className="text-primary">contact your platform owner</span>
      </p>
    </div>
  );
};

export default StellarAuth;
