import AppRoutes from "./Routes";
import { ThemeProvider } from '@mui/material';
import Box from '@mui/material/Box';
import { LightTheme } from './layouts/Themes'
import { DataProvider } from "./contexts/Data/Context";

function App() {


  return (
    <DataProvider>
      <ThemeProvider theme={LightTheme}>
        <Box sx={{ backgroundColor: 'background.default' }}>
          <AppRoutes />
        </Box>
      </ThemeProvider>
    </DataProvider>
  );
}

export default App;
