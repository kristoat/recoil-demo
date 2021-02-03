import React from "react";
import { useRecoilState } from "recoil";
import { squaresState } from "./Shapes.recoil";

export default function Squares() {
  const [squares, setSquares] = useRecoilState(squaresState);
  return (
    <div
      onClick={(e) => setSquares([...squares, { x: e.clientX, y: e.clientY }])}
    >
      <h1>Squares</h1>
      {squares.map((square, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: `${square.x}px`,
            top: `${square.y}px`,
            border: "3px solid blue",
          }}
        >
          <span style={{ fontSize: "4px" }}>
            {square.x}, {square.y}
          </span>
        </div>
      ))}
    </div>
  );
}
