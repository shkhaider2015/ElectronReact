import React from 'react';
import 'fontsource-roboto';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { AuthProvider } from './context/authContext'
import MyRoutes from './components/myRoutes/myRoutes'
import { AdminContext } from "./context/adminContext";
import { UserProvioder, ClientProvioder } from "./context/dataContext";


const theme = createMuiTheme(
  {
    palette: {
      primary: {
        main: '#EF3729',
      },
      secondary: {
        main : '#FF7F75',
      }
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
            <UserProvioder>
              <ClientProvioder>
              <MyRoutes />
              </ClientProvioder>
            </UserProvioder>
          </AdminContext.Provider>
        </AuthProvider>

      </MuiThemeProvider>


    </div>
  );
}

export default App;

// npm run dev
