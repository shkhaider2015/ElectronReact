import React from 'react';
import 'fontsource-roboto';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { AuthProvider } from './context/authContext'
import MyRoutes from './components/myRoutes/myRoutes'
import { AdminContext } from "./context/adminContext";
import { UserProvioder, ClientProvioder } from "./context/dataContext";
import { SplashScreen } from './components/splashScreen/splashScreen';



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



const App = () => {

  const isAdimn = React.useState(false)
  
const [isReady, setIsReady] = React.useState(true)
  

  React.useEffect(
    () =>
    {
      if(!isReady)
      {
        setTimeout(
          () =>
          {
            setIsReady(!isReady)
          },
          5000
        )
      }
    },
    [isReady]
  )
  

  if(isReady)
  {
    return (
      <div  >
  
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
  else
  {
    return <SplashScreen />
  }
}

export default App;

// npm run dev
