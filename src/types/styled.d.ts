import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      black: string;
      gray: string;
      white: string;
      error: string;
      background: string;
    };
    font: {
      size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
      }
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  }
}
