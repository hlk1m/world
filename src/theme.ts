import { DefaultTheme } from "styled-components";

export const darkTheme: DefaultTheme = {
  textColor: "hsl(0, 0%, 100%)",
  bgColor: "hsl(207, 26%, 17%)",
  elementsColor: "hsl(209, 23%, 22%)",
  inputColor: "hsl(0, 0%, 100%)",
  shadowColor: "0px 1px 6px 2px rgba(0, 0, 0, 0.05)",
  borderColor: "hsl(209, 23%, 22%)",
  buttonShadow: "0px 1px 6px 2px rgba(0,0,0, 0.5)",
};

export const lightTheme: DefaultTheme = {
  textColor: "hsl(200, 15%, 8%)",
  bgColor: "hsl(0, 0%, 98%)",
  elementsColor: "hsl(0, 0%, 100%)",
  inputColor: "hsl(0, 0%, 52%)",
  shadowColor: "0px 1px 6px 2px rgba(0, 0, 0, 0.05)",
  borderColor: "#e6e6e6",
  buttonShadow: "0px 1px 5px 2px rgba(0, 0, 0, 0.08)",
};
