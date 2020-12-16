import React from 'react';
import 'fontsource-roboto';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { AuthProvider } from './context/authContext'
import MyRoutes from './components/myRoutes/myRoutes'
import { AdminContext } from "./context/adminContext";


const theme = createMuiTheme(
  {
    palette: {
      primary: {
        main: '#EF3729',
      },
      gradient: 'linear-gradient(to top left, #c74081, #ef3729)'
    }
  }
)

function App() {

  const isAdimn = React.useState(false)
  

  
  return (
    <div>

      <MuiThemeProvider theme={theme}>
        <AuthProvider>
          <AdminContext.Provider value={isAdimn}>
            <MyRoutes />
          </AdminContext.Provider>
        </AuthProvider>

      </MuiThemeProvider>


    </div>
  );
}

export default App;

// npm run dev
