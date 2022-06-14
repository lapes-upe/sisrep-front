import AppRoutes from "./Routes";
import { ThemeProvider } from '@mui/material';
import Box from '@mui/material/Box';
import { LightTheme } from './layouts/Themes'

function App() {
  return (
    <ThemeProvider theme={LightTheme}>
      <Box sx={{backgroundColor: 'background.default'}}>
        <AppRoutes />
      </Box>
    </ThemeProvider>
  );
}

export default App;
