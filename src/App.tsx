import { useMemo } from "react"
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
function App() {
  // Happens once on initial load
  const theme = useMemo(() => createTheme(themeSettings), []);

  return (
    
   <div className="app">
    <ThemeProvider theme ={theme}>
      <CssBaseline />
      hi
    </ThemeProvider>

   </div>);
}

export default App
