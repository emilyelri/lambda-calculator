import React from "react";

export default function SpecialButton(props) {
  return (
    <>
      {
        /* Display a button element rendering the data being passed down from the parent container on props */
        <button className = "buttons specialsButton">
            {props.special}
        </button>
      }
    </>
  );
};