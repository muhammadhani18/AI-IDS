import React, { useState } from 'react';
import OnlinePredictionIcon from '@mui/icons-material/OnlinePrediction';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import { styled } from '@mui/system';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const SidebarContainer = styled('div')({
  display: 'flex',
});

const Sidebar = styled(Drawer)({
  width: '200px',
  flexShrink: 0,
});

const SidebarList = styled(List)({
  width: '100%',
});

const SidebarListItem = styled(ListItem)({
  textDecoration: 'none',
});

function Nav() {
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <SidebarContainer>
      <Sidebar
        open={open}
        onClose={() => setOpen(false)}
        variant="persistent"
        anchor="left"
      >
        <SidebarList>
          <SidebarListItem button key="Home">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </SidebarListItem>
          <SidebarListItem button key="About">
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="About Project" />
          </SidebarListItem>
          <SidebarListItem button key="Reports">
            <ListItemIcon>
              <ReportProblemIcon />
            </ListItemIcon>
            <ListItemText primary="Reports" />
          </SidebarListItem>
        </SidebarList>
      </Sidebar>

      <div>
        <nav>
          <button onClick={toggleSidebar}>
            <OnlinePredictionIcon sx={{ fontSize: 40 }} />
          </button>
        </nav>
        <h4>Network Analysis</h4>
      </div>
    </SidebarContainer>
  );
}

export default Nav;
