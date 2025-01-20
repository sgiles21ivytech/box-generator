import { useState } from "react";
import "./App.css";
import BoxForm from "./components/BoxForm";
import BoxDisplay from "./components/BoxDisplay";

function App() {
  const [boxes, setBoxes] = useState([]);

  const onNewBox = (newBox) => {
    setBoxes((prev) => [newBox, ...prev]);
  };

  return (
    <>
      <BoxForm onNewBox={onNewBox} />
      <BoxDisplay boxes={boxes} />
    </>
  );
}

export default App;
