import React from "react";
import Counter from "./Counter";


function App() {
  return (
    <div>
      <Counter initialValue={0} />
      <Counter initialValue={10} />
      <Counter initialValue={-10} />
    </div>
  );
}

export default App;
