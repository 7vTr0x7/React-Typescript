type PropType = {
  heading: string;
  count: number;
  addFunc: (n: number, m: number) => number;
};

const Box = ({ heading, count, addFunc }: PropType) => {
  const value = addFunc(2, 5);
  return (
    <div>
      <h1>{heading}</h1>
      <p>{count}</p>
      <p>{value}</p>
    </div>
  );
};

export default Box;
