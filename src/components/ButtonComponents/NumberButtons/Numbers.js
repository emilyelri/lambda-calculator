import React, {useState} from "react";

import NumberButton from "./NumberButton";

import { numbers } from "../../../data";

export default function Numbers(props) {
  // STEP 2 - add the imported data to state
  const nums = useState(numbers);

  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
      it any props needed by the child component*/}
       {
         nums.map((item, index) => (
        <NumberButton key={index} numberState={item} /> 
        ))
      }
    </div>
  );
};