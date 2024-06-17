import "styled-components";

//Theme type
declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    elementsColor: string;
    inputColor: string;
    shadowColor: string;
    buttonShadow: string;
    borderColor: string;
  }
}
