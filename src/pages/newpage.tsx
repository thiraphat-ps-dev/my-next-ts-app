// src/pages/newpage.tsx
import { useQuery } from '@tanstack/react-query';
import {
  Container,
  Typography,
  Box,
  CircularProgress,
  Button,
  Paper,
} from '@mui/material';
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';
import Link from 'next/link';
import { fetchPostsData } from '../utils/api/fetchPostsData';

const NewPage = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPostsData,
    staleTime: Infinity, // ข้อมูลจะไม่เคยหมดอายุ
  });

  if (isLoading) {
    return (
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center', marginTop: 8, color: '#ffffff' }}>
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
        <Box sx={{ textAlign: 'center', marginTop: 8, color: '#ffffff' }}>
          <Typography variant="h6" component="div" color="error">
            Error fetching data
          </Typography>
        </Box>
      </Container>
    );
  }

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'title', headerName: 'Title', width: 300 },
    { field: 'body', headerName: 'Body', width: 600 },
  ];

  const rows: GridRowsProp = data.map((post: any) => ({
    id: post.id,
    title: post.title,
    body: post.body,
  }));

  return (
    <Container maxWidth="lg">
      <Box sx={{ textAlign: 'center', marginTop: 8 }}>
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{ color: '#ffffff' }}
        >
          New Page
        </Typography>
        <Typography variant="body1" paragraph sx={{ color: '#ffffff' }}>
          This is the new page. Here you can see a list of posts fetched from an
          API.
        </Typography>
        <Paper
          sx={{
            height: 600,
            width: '100%',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
          }}
        >
          <DataGrid rows={rows} columns={columns} pagination />
        </Paper>
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

export default NewPage;
