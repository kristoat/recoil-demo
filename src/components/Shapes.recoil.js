import { atom, selector } from "recoil";

export const circlesState = atom({
  key: "circles",
  default: [],
});

export const squaresState = atom({
  key: "squares",
  default: [],
});

export const allShapesSelector = selector({
  key: "allShapes",
  get: ({ get }) => {
    const circles = get(circlesState);
    const squares = get(squaresState);

    return [...circles, ...squares];
  },
});
