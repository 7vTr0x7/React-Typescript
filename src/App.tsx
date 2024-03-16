import Box from "./components/Box";

function App() {
  const addFunc = (n: number, m: number): number => {
    return n + m;
  };

  const returnValue = <T,>(val: T): T => {
    return val;
  };

  return (
    <>
      <div>
        <Box
          heading={"Hamlo"}
          count={1}
          addFunc={addFunc}
          returnValue={returnValue}>
          <h2>children</h2>
        </Box>
      </div>
    </>
  );
}

export default App;
