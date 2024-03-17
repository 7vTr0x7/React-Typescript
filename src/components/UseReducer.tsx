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

const reducer = (state: StateType, action: ActionType) => {
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
  const {} = useReducer(reducer, initialState);

  return <div>UseReducer</div>;
};

export default UseReducer;
