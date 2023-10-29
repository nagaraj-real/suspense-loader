import "./App.css";
import { Button, SuspenseLoader } from "../lib/main";
import { Load } from "./Load.jsx";
import { useRandomCounter } from "./hooks/useRandomCounter.js";

function App() {
  const data = useRandomCounter();
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button type="button">Test</Button>
      <SuspenseLoader
        count={2}
        type="image"
        className="flex justify-center gap-20"
      >
        <Load />
        <h2>{data}</h2>
      </SuspenseLoader>
    </>
  );
}

export default App;
