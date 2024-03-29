"use client";

import { useState } from "react";
import SingleTech from "./SingleTech";

export default function StackList(props) {
  const { stack } = props;
  const [switchLetter, setSwitchLetter] = useState("");

  const handleReturnToStack = (e) => {
    e.preventDefault();
    setSwitchLetter("");
  };

  const handleLetterEvent = (e) => {
    e.preventDefault();
    const letter = e.target.getAttribute("data-letter");

    if (switchLetter.letter === letter) {
      setSwitchLetter("");
    } else {
      setSwitchLetter(letter);
    }
  };

  return (
    <>
      {switchLetter === "" && (
        <>
          {Object.keys(stack).map((letter) => {
            return (
              <button
                key={stack[letter].main}
                className="w-[15%] text-center border border-blue-chill-100/15 rounded-md hover:scale-105 hover:text-blue-chill-50"
                onClick={handleLetterEvent}
                data-letter={stack[letter].main}
              >
                {stack[letter].main}
              </button>
            );
          })}
        </>
      )}

      {switchLetter !== "" && (
        <SingleTech
          letter={stack[switchLetter]}
          returner={handleReturnToStack}
        />
      )}
    </>
  );
}
