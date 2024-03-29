import ColoredNumber from "./ColoredNumber";
import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter">
      <h1>Colored Number</h1>
      <ColoredNumber value={count} />
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment count"
          onClick={incrementCount}
        >
          +
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement count"
          onClick={decrementCount}
        >
          -
        </button>
      </div>
    </div>
  );
}
