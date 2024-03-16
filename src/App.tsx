import Box from "./components/Box";

function App() {
  const addFunc = (n: number, m: number): number => {
    return n + m;
  };

  return (
    <>
      <div>
        <Box heading={"Hamlo"} count={1} addFunc={addFunc} />
      </div>
    </>
  );
}

export default App;
