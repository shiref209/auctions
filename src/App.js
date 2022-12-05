import './App.css';
import NavigationBar from './components/Navigation/NavigationBar';
import {ThemeProvider } from '@mui/material/styles';
import theme from './components/Navigation/MUI theme/theme';

  function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        {console.log(theme)}
      <NavigationBar/>
      </ThemeProvider>
    
    </div>
  );
}

export default App;
