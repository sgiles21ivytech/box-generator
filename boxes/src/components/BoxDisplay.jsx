
const BoxDisplay = ({ boxes }) => {
  if (boxes.length === 0) {
    return <p>No boxes to display. Add one using the form!</p>;
  }

  return (
    <div>
      <h2>Generated Boxes:</h2>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {boxes.map((box, index) => (
          <div
            key={index}
            style={{
              backgroundColor: box.color,
              width: `${box.size}px`,
              height: `${box.size}px`,
              border: "1px solid #000",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default BoxDisplay;

