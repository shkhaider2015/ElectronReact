import React from 'react';
import 'fontsource-roboto';
import MenuAppBar from './components/appbar/appbar';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { AuthProvider } from './context/authContext'
import MyRoutes from './components/myRoutes/myRoutes'

const theme = createMuiTheme(
  {
    palette: {
      primary: {
        main: '#EF3729',
      }
    }
  }
)

function App() {
  return (
    <div>

      <MuiThemeProvider theme={theme}>
        <AuthProvider>
          <MyRoutes />
        </AuthProvider>

      </MuiThemeProvider>


    </div>
  );
}

export default App;

// npm run dev
