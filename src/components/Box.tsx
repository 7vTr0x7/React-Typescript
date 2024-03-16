type PropType = {
  heading: string;
  count: number;
};

const Box = ({ heading, count }: PropType) => {
  return (
    <div>
      <h1>{heading}</h1>
      <p>{count}</p>
    </div>
  );
};

export default Box;
