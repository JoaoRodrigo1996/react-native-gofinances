import "styled-components";
import { defaultTheme } from "../global/styles/theme";

type ThemeType = typeof defaultTheme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
