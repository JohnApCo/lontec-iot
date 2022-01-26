import React from "react";
import { ThemeProvider } from "@mui/material";

function SecondarySidenavTheme({ theme, classes, children, open }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
export default SecondarySidenavTheme;
