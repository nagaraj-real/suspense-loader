import "./App.css";
import { SuspenseLoaderFlex } from "../lib/main";
import { useRandomCounter } from "./hooks/useRandomCounter.js";
import React from "react";
const Load = React.lazy(
  () =>
    new Promise((resolve) => {
      import("./DefaultLoad.tsx").then((result: any) => {
        setTimeout(() => {
          resolve(result);
        }, 10000);
      });
    })
);

function App() {
  const data = useRandomCounter();
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button type="button">Test</button>
      <SuspenseLoaderFlex count={1} type="card">
        <Load />
        <h2>{data}</h2>
      </SuspenseLoaderFlex>
    </>
  );
}

export default App;
