import { NextPage } from 'next';
import Link from 'next/link';
import {
  Container,
  Typography,
  Box,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  IconButton,
} from '@mui/material';
import useStyles from '../hooks/useStyles';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Sidebar from '../components/Sidebar/Sidebar';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const HomePage: NextPage = () => {
  const { buttonStyles } = useStyles();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #71b7e6, #9b59b6)',
        minHeight: '100vh',
      }}
    >
      <Navbar />
      <Sidebar open={sidebarOpen} onClose={toggleSidebar} />
      <Container maxWidth="lg">
        <IconButton
          sx={{ position: 'fixed', top: 16, left: 16, color: '#ffffff' }}
          onClick={toggleSidebar}
        >
          <MenuIcon />
        </IconButton>
        <Box sx={{ textAlign: 'center', marginTop: 8 }}>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{ color: '#ffffff' }}
          >
            Home Page
          </Typography>
          <Button
            sx={{ ...buttonStyles, marginBottom: '20px' }}
            variant="contained"
            size="large"
          >
            Hello Material-UI
          </Button>
          <nav>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                marginBottom: 4,
              }}
            >
              <Link href="/newpage" passHref>
                <Button
                  variant="outlined"
                  sx={{ margin: 1, color: '#ffffff', borderColor: '#ffffff' }}
                >
                  New Page
                </Button>
              </Link>
              <Link href="/about" passHref>
                <Button
                  variant="outlined"
                  sx={{ margin: 1, color: '#ffffff', borderColor: '#ffffff' }}
                >
                  About Us
                </Button>
              </Link>
              <Link href="/contact" passHref>
                <Button
                  variant="outlined"
                  sx={{ margin: 1, color: '#ffffff', borderColor: '#ffffff' }}
                >
                  Contact Us
                </Button>
              </Link>
              <Link href="/login" passHref>
                <Button
                  variant="outlined"
                  sx={{ margin: 1, color: '#ffffff', borderColor: '#ffffff' }}
                >
                  Login
                </Button>
              </Link>
            </Box>
          </nav>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ color: '#ffffff' }}
          >
            Explore Our Features
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  alt="Feature 1"
                  height="140"
                  image="https://images.unsplash.com/photo-1707707927508-b8d1ae1d1cc9?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&q=80&w=400"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Feature 1
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Description of feature 1. This is a brief description of
                    what this feature offers.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  alt="Feature 2"
                  height="140"
                  image="https://images.unsplash.com/photo-1504274066651-8d31a536b11a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEwfHx0ZWNoLGNvbXB1dGVyfGVufDB8fHx8MTY2ODg3MTUwNg&ixlib=rb-4.0.3&q=80&w=400"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Feature 2
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Description of feature 2. This is a brief description of
                    what this feature offers.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  alt="Feature 3"
                  height="140"
                  image="https://images.unsplash.com/photo-1517511620798-cec17d428bc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDIyfHxuYXR1cmUsZm9yZXN0fGVufDB8fHx8MTY2ODg3MTUyMw&ixlib=rb-4.0.3&q=80&w=400"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Feature 3
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Description of feature 3. This is a brief description of
                    what this feature offers.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default HomePage;
