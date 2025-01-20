import { useState } from "react";

const BoxForm = ({ onNewBox }) => {
  const [boxcolor, setBoxColor] = useState("");
  const [boxSize, setBoxSize] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    if (!boxcolor || !boxSize) {
      alert("Please provide both a color and a size.");
      return;
    }
    const newBox = {
      color: boxcolor,
      size: parseInt(boxSize, 10),
    };
    onNewBox(newBox);
    setBoxColor("");
    setBoxSize("");
  };

  return (
    <div className="Child">
      <form onSubmit={handleAdd}>
        <h1>Box Generator Master</h1>
        <label>Color</label>
        <input
          type="text"
          value={boxcolor}
          onChange={(e) => setBoxColor(e.target.value)}
          placeholder="Enter a color"
        />
        <label>Size (pixels)</label>
        <input
          type="number"
          value={boxSize}
          onChange={(e) => setBoxSize(e.target.value)}
          placeholder="Enter a size in pixels"
        />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default BoxForm;
