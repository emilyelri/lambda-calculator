import React, {useState} from "react";

import SpecialButton from "./SpecialButton";

import { specials } from "../../../data";

export default function Specials() {
  // STEP 2 - add the imported data to state
  const [specialState, setSpecialState] = useState(specials);

  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
       specialState.map((item, index) => (
        <SpecialButton key={index} special={item} /> 
        ))
      }
    </div>
  );
};
