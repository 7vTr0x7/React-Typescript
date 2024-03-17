import Ex from "./components/Ex";
import ThemeProvider from "./components/ThemeProvider";
import UseReducer from "./components/UseReducer";

function App() {
  return (
    <>
      <ThemeProvider>
        <div> hello </div>
        <Ex />

        <UseReducer />
      </ThemeProvider>
    </>
  );
}

export default App;
