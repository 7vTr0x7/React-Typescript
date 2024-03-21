import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { incByValue, StateType } from "./utils/rootSlice";

function App() {
  const [val, setVal] = useState<number>(0);

  const dispatch = useDispatch();
  const count = useSelector((state: StateType) => state.count);

  const inc = () => {
    dispatch(incByValue(val));
  };

  return (
    <>
      <h1>counter</h1>
      <h1>count : {count}</h1>
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
