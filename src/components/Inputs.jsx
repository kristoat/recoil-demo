import React from "react";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { circlesState, squaresState } from "./Shapes.recoil";

export default function Inputs() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const [circles, setCircles] = useRecoilState(circlesState);
  const [squares, setSquares] = useRecoilState(squaresState);

  return (
    <div>
      <h1>Inputs</h1>
      <div>
        x:{" "}
        <input
          type="number"
          style={{ width: "100px" }}
          value={position.x}
          onChange={(e) => setPosition({ ...position, x: e.target.value })}
        />
      </div>
      <div>
        y:{" "}
        <input
          type="number"
          style={{ width: "100px" }}
          value={position.y}
          onChange={(e) => setPosition({ ...position, y: e.target.value })}
        />
      </div>
      <button onClick={() => setCircles([...circles, position])}>
        add circle
      </button>
      <button onClick={() => setSquares([...squares, position])}>
        add square
      </button>
    </div>
  );
}
