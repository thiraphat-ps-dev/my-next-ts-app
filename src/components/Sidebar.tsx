import React from 'react';

import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Toolbar,
} from '@mui/material';

const drawerWidth = 180;

const Sidebar = () => {
  const items = [
    { text: 'Inbox', icon: <InboxIcon /> },
    { text: 'Starred', icon: <MailIcon /> },
    { text: 'Send email', icon: <MailIcon /> },
    { text: 'Drafts', icon: <InboxIcon /> },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      <div>
        <List>
          {items.map((item, index) => (
            <ListItem button key={index}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
};

export default Sidebar;
