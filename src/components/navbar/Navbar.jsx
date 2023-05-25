import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Typography,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

import { Search, Home, Public, Description, Menu, ExitToApp } from '@mui/icons-material';
import SettingsInputAntennaIcon from '@mui/icons-material/SettingsInputAntenna';
function Navbar() {

  return (
    <>
      <AppBar position="fixed" style={{ backgroundColor: 'rgb(35,35,35)' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <SettingsInputAntennaIcon/>
          </IconButton>
          <Typography variant="h5" style={{ color: '#ffffff' }}>
            Network Analysis
          </Typography>
          <div style={{ marginLeft: '800px' }}>
            <Button startIcon={<Public />} color="inherit">
              Login 
            </Button>
            <Button startIcon={<Public />} color="inherit">
              Sign Up
            </Button>
          </div>
          <div style={{ display: 'flex', alignItems: 'left'}}>
            <IconButton color="inherit" aria-label="search">
              <Search />
            </IconButton>
            <InputBase
              placeholder="Search..."
              style={{ backgroundColor: '#ffffff', color: '#000000', marginRight: '16px', padding: '4px', borderRadius: '20px' }}
            />  
          </div>
        </Toolbar>
      </AppBar>
      {/* <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}> */}
        <List style={{ backgroundColor: 'rgb(35,35,35)', color: '#ffffff', height: '100vh', paddingTop: '64px', width: '220px', position:'fixed' }}>
          <ListItem button>
            <ListItemIcon>
              <Home style={{ color: '#ffffff' }} />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Public style={{ color: '#ffffff' }} />
            </ListItemIcon>
            <ListItemText primary="IP" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Description style={{ color: '#ffffff' }} />
            </ListItemIcon>
            <ListItemText primary="Report" />
          </ListItem>
          <div style={{ position: 'absolute', bottom: '16px', width: '100%' }}>
            {/* <Divider style={{ backgroundColor: '#ffffff' }} /> */}
            <ListItem button>
              <ListItemIcon>
                <ExitToApp style={{ color: '#ffffff' }} />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>
          </div>
        </List>
      {/* </Drawer> */}
    </>
  );
}

export default Navbar;
