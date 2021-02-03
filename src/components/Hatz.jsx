import React from "react";
import { useState } from "react";

import { ReactComponent as Hat1 } from "../svgs/elegant-top-hat.svg";
import { ReactComponent as Hat2 } from "../svgs/hat-svgrepo-com.svg";
import { ReactComponent as Hat3 } from "../svgs/cap-svgrepo-com.svg";
import { useRecoilValue } from "recoil";
import { allShapesSelector } from "./Shapes.recoil";

export default function Hatz() {
  const allShapes = useRecoilValue(allShapesSelector);

  const [hatzStyle, setHatzStyle] = useState(0);
  const [hatzEnabled, setHatzEnabled] = useState(false);

  return (
    <div>
      <h1>Hatz</h1>
      <button
        style={{ background: hatzEnabled ? "green" : "red" }}
        onClick={() => {
          setHatzEnabled(!hatzEnabled);
        }}
      >
        Toggle hatz
      </button>
      <button
        onClick={() => {
          setHatzStyle((hatzStyle + 1) % 3);
        }}
      >
        Change hatz style
        {hatzStyle === 0 && <Hat1 />}
        {hatzStyle === 1 && <Hat2 />}
        {hatzStyle === 2 && <Hat3 />}
      </button>
      {hatzEnabled && (
        <>
          {allShapes.map((shape, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                left: `${shape.x}px`,
                top: `${shape.y - 20}px`,
                width: "25px",
                height: "25px",
                pointerEvents: "none",
              }}
            >
              {hatzStyle === 0 && <Hat1 />}
              {hatzStyle === 1 && <Hat2 />}
              {hatzStyle === 2 && <Hat3 />}
            </div>
          ))}
        </>
      )}
    </div>
  );
}
