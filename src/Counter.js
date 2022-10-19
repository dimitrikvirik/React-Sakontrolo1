import React, { useState } from "react";

function Counter({ initialValue }) {
  const [counter, setCounter] = useState(initialValue);

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
    </div>
  );
}
export default Counter;