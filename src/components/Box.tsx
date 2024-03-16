import { ReactNode } from "react";

type PropType = {
  heading: string;
  count: number;
  addFunc: (n: number, m: number) => number;
  children: ReactNode;
  returnValue: <T>(val: T) => T;
};

const Box = ({ heading, count, addFunc, children, returnValue }: PropType) => {
  const value = addFunc(2, 5);
  const rValue1 = returnValue(1);
  const rValue2 = returnValue("value");

  return (
    <div>
      <h1>{heading}</h1>
      <p>{count}</p>
      <p>{value}</p>
      {children}
      <p>{rValue1}</p>
      <p>{rValue2}</p>
    </div>
  );
};

export default Box;
