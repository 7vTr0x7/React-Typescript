import { ReactNode } from "react";

type PropType = {
  heading: string;
  count: number;
  addFunc: (n: number, m: number) => number;
  children: ReactNode;
};

const Box = ({ heading, count, addFunc, children }: PropType) => {
  const value = addFunc(2, 5);

  return (
    <div>
      <h1>{heading}</h1>
      <p>{count}</p>
      <p>{value}</p>
      {children}
    </div>
  );
};

export default Box;
