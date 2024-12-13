import { useState } from "react";
import "./App.css";
import { usePrev } from "./hooks/usePrev";

function App() {
  const [state, setState] = useState(0);
  const prev = usePrev(state);

  return (
    <>
      <p>{state}</p>
      <button
        onClick={() => {
          setState((state + 1));
        }}
      >
        clickme
      </button>
      <p>the previous value {prev}</p>
    </>
  );
}

export default App;
