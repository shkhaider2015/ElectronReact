import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, List, ListItem, ListItemText, ListItemIcon, 
         Divider, Menu, MenuItem, FormGroup, FormControlLabel,
        Switch, IconButton, Typography, Toolbar, AppBar } from "@material-ui/core";
import { ChevronLeft, Menu as MenuIcon, AccountCircle  } from "@material-ui/icons";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  appBar : {
    position : 'static'
  },
  title: {
    flexGrow: 1,
  },
  drawer : {
    width : drawerWidth,
    flexShrink : 0,
  },
  drawerPaper : {
    width : drawerWidth
  }
}));



export default function MenuAppBar() {
  const classes = useStyles();
  const [ auth, setAuth ] = React.useState( true );
  const [ drawerOpen, setDrawerOpen ] = React.useState( false )
  const [ anchorEl, setAnchorEl ] = React.useState( null );
  const open = Boolean(anchorEl);
  //ksfkjsdk

  const handleChange = (event) => {
    setAuth( event.target.checked );
  };


  const handleMenu = (event) => {
    setAnchorEl( event.currentTarget );
  };


  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerOpen = () => {
    setDrawerOpen(true)
  }

  const handleDrawerClose = () => {
      setDrawerOpen(false)
  }



  function renderIcon()
  {

  }

  const renderDrawer = (
    <Drawer
    className={classes.drawer}
    anchor="left"
    open={drawerOpen}
    onClose={handleDrawerClose}
    classes={{
      paper: classes.drawerPaper,
    }}
  >
    <div className={classes.drawerHeader}>
      <IconButton onClick={handleDrawerClose}>
        {/* {theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />} */}
        <ChevronLeft color="primary" />
      </IconButton>
    </div>
    <Divider />
    <List>
      {

        ['Messi', 'Naymar', 'Kroos'].map(
          (text, index) =>
            (
              // <Link key={index} to={"/" + text} className={classes.link} >
                <ListItem button key={text} onClick={handleDrawerClose} >
                  <ListItemIcon className={classes.listItemIcon}>
                    {
                      renderIcon(text)
                    }
                  </ListItemIcon>
                  <ListItemText> {text} </ListItemText>
                </ListItem>
              // </Link>
            )
        )
      }
    </List>
  </Drawer>
  )

  return (
    <div className={classes.root}>
      <FormGroup>
        <FormControlLabel
          control={<Switch color="primary" checked={auth} onChange={handleChange} aria-label="login switch" />}
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleDrawerOpen}>
            <MenuIcon  />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Haider Builders
          </Typography>
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>

      <main>
        {
          renderDrawer
        }
      </main>
    </div>
  );
}