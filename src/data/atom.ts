import { atom, selector } from "recoil";

export const themeAtom = atom({
  key: "isDark",
  default: false,
});

export const regionAtom = atom({
  key: "category",
  default: "all",
});

export const formAtom = atom({
  key: "form",
  default: "",
});
