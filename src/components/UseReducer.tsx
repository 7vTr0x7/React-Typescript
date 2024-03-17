import { useReducer } from "react";

type StateType = {
  count: number;
};

type ActionType =
  | { type: "Increment"; payload: number }
  | { type: "Decrement"; payload: number };

const initialState: StateType = {
  count: 0,
};

const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case "Increment":
      return { count: state.count + action.payload };
    case "Decrement":
      return { count: state.count - action.payload };

    default:
      return state;
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const inc = (): void => {
    dispatch({
      type: "Increment",
      payload: 1,
    });
  };

  const dec = (): void => {
    dispatch({
      type: "Decrement",
      payload: 1,
    });
  };

  return (
    <div>
      <h1>Count Change</h1>
      <p>Count : {state.count}</p>

      <button onClick={inc}> + </button>
      <button onClick={dec}> - </button>
    </div>
  );
};

export default UseReducer;
