import React from 'react';
import { Box, Drawer, List, ListItem, ListItemText } from '@mui/material';
import Link from 'next/link';

const Sidebar: React.FC<{ open: boolean; onClose: () => void }> = ({
  open,
  onClose,
}) => {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <Box sx={{ width: 250 }} role="presentation" onClick={onClose}>
        <List>
          <Link href="/" passHref>
            <ListItem button>
              <ListItemText primary="Home" />
            </ListItem>
          </Link>
          <Link href="/about" passHref>
            <ListItem button>
              <ListItemText primary="About" />
            </ListItem>
          </Link>
          <Link href="/contact" passHref>
            <ListItem button>
              <ListItemText primary="Contact" />
            </ListItem>
          </Link>
          <Link href="/login" passHref>
            <ListItem button>
              <ListItemText primary="Login" />
            </ListItem>
          </Link>
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
