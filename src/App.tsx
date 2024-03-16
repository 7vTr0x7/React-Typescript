import Ex from "./components/Ex";
import ThemeProvider from "./components/ThemeProvider";

function App() {
  return (
    <>
      <ThemeProvider>
        <div> hello </div>
        <Ex />
      </ThemeProvider>
    </>
  );
}

export default App;
