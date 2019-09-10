import React from "react";

export default function NumberButton(props) {
  return (
    <button className="buttons numbersButton">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.number}
    </button>
  );
};
