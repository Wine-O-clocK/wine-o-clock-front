import { atom } from "recoil";
import { v4 as uuidv4 } from "uuid";

export const PathState = atom({
  key: `PathState/${uuidv4()}`,
  default: "/",
});

export const wineLoadingState = atom({
  key: `wineLoadingState/${uuidv4()}`,
  default: 0,
});
