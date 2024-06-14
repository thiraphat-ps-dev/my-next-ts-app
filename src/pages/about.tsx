// src/app/about/page.tsx
import { useQuery } from '@tanstack/react-query';
import {
  Container,
  Typography,
  Box,
  CircularProgress,
  Button,
} from '@mui/material';
import Link from 'next/link';
import { fetchUserData } from '../utils/fetchUserData';

const AboutPage = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['user'],
    queryFn: fetchUserData,
    // staleTime: 5 * 60 * 1000, // ข้อมูลจะไม่ถูกเรียกซ้ำภายใน 5 นาที
    // cacheTime: 10 * 60 * 1000, // ข้อมูลจะถูกเก็บใน cache ไว้ 10 นาที
  });

  if (isLoading) {
    return (
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center', marginTop: 8 }}>
          <CircularProgress />
          <Typography variant="h6" component="div">
            Loading...
          </Typography>
        </Box>
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center', marginTop: 8 }}>
          <Typography variant="h6" component="div" color="error">
            Error fetching data
          </Typography>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="md">
      <Box sx={{ textAlign: 'center', marginTop: 8 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" paragraph>
          This is the about page. Here you can write some information about your
          website or your company.
        </Typography>
        <Typography variant="h5" component="div" gutterBottom>
          User Information:
        </Typography>
        <Typography variant="body1" component="div">
          Name: {data.name}
        </Typography>
        <Typography variant="body1" component="div">
          Email: {data.email}
        </Typography>
        <Typography variant="body1" component="div">
          Phone: {data.phone}
        </Typography>
        <nav>
          <Link href="/" passHref>
            <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
              Go back to Home
            </Button>
          </Link>
        </nav>
      </Box>
    </Container>
  );
};

export default AboutPage;
