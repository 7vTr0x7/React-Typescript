import { useState } from "react";
import Form from "./components/Form";

function App() {
  const [value, setValue] = useState<string>("");

  // const addFunc = (n: number, m: number): number => {
  //   return n + m;
  // };

  // const returnValue = <T,>(val: T): T => {
  //   return val;
  // };

  return (
    <>
      <div>
        {/* <Box
          heading={"Hamlo"}
          count={1}
          addFunc={addFunc}
          returnValue={returnValue}>
          <h2>children</h2>
        </Box> */}

        <Form label={"search"} value={value} setter={setValue} />
      </div>
    </>
  );
}

export default App;
