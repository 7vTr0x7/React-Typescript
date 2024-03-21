import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { incByValue, StateType, increment, decrement } from "./utils/rootSlice";

function App() {
  const [val, setVal] = useState<number>(0);

  const dispatch = useDispatch();
  const count = useSelector((state: StateType) => state.count);

  const inc = () => {
    setVal(0);
    dispatch(incByValue(val));
  };

  const incOf = () => {
    dispatch(increment());
  };
  const decOf = () => {
    dispatch(decrement());
  };

  return (
    <>
      <h1>counter</h1>
      <h1>count : {count}</h1>
      <button onClick={incOf}> + </button>
      <button onClick={decOf}> + </button>
      <button> - </button>
      <input
        type="number"
        value={val}
        onChange={(e) => setVal(Number(e.target.value))}
      />

      <button disabled={val < 0} onClick={inc}>
        Add
      </button>
    </>
  );
}

export default App;
