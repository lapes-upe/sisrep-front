import AppRoutes from "./Routes";
import { ThemeProvider } from '@mui/material';
import Box from '@mui/material/Box';
import { LightTheme } from './layouts/Themes'
import { DataProvider } from "./contexts/Data/Context";
import { QueryClient, QueryClientProvider } from 'react-query';

// Create a client
const queryClient = new QueryClient();

function App() {

  return (
    <DataProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={LightTheme}>
          <Box sx={{ backgroundColor: 'background.default' }}>
            <AppRoutes />
          </Box>
        </ThemeProvider>
      </QueryClientProvider>
    </DataProvider>
  );
}

export default App;
