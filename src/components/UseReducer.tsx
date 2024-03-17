import { useReducer } from "react";

type StateType = {
  count: number;
};

const initialState: StateType = {
  count: 0,
};

const reducer = () => {};

const UseReducer = () => {
  const {} = useReducer(reducer, initialState);

  return <div>UseReducer</div>;
};

export default UseReducer;
