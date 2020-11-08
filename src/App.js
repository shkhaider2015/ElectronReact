import React from 'react';
import 'fontsource-roboto';
import MenuAppBar from './components/appbar/appbar';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { AuthProvider } from './context/authContext'

const theme = createMuiTheme(
  {
    palette: {
      primary: {
        main: '#b124e0'
      }
    }
  }
)

function App() {
  return (
    <div>

      <MuiThemeProvider theme={theme}>
        <AuthProvider>
          <MenuAppBar />
        </AuthProvider>

      </MuiThemeProvider>


    </div>
  );
}

export default App;

// npm run dev
