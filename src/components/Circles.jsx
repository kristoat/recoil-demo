import React from "react";
import { useRecoilState } from "recoil";
import { circlesState } from "./Shapes.recoil";

export default function Circles() {
  const [circles, setCircles] = useRecoilState(circlesState);

  return (
    <div
      onClick={(e) => setCircles([...circles, { x: e.clientX, y: e.clientY }])}
    >
      <h1>Circles</h1>
      {circles.map((circle, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: `${circle.x}px`,
            top: `${circle.y}px`,
            border: "3px solid hotpink",
            borderRadius: "50%",
          }}
        >
          <span style={{ fontSize: "4px" }}>
            {circle.x}, {circle.y}
          </span>
        </div>
      ))}
    </div>
  );
}
