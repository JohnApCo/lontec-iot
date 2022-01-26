import React from "react";
import useSettings from "app/hooks/useSettings";
import { CssBaseline, ThemeProvider } from "@mui/material";

function MatxTheme({ children }) {
  const { settings } = useSettings();
  const activeTheme = { ...settings.themes[settings.activeTheme] };
  return (
    <ThemeProvider theme={activeTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default MatxTheme;
