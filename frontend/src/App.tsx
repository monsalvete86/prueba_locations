import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { LocationsList } from './components/LocationsList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

// Create a theme instance
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<LocationsList />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
