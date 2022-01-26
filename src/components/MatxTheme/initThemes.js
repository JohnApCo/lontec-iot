import { forEach, merge } from "lodash";
import { createTheme } from "@mui/material";
import themeOptions from "./themeOptions";
import { themeColors } from "./themeColors";

function createMatxThemes() {
  const themes = {};

  forEach(themeColors, (value, key) => {
    themes[key] = createTheme(merge({}, themeOptions, value));
  });
  return themes;
}
export const themes = createMatxThemes();
