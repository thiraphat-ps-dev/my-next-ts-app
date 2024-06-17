// src/pages/product-list.tsx
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
} from '@mui/material';
import { NextPage } from 'next';
import Link from 'next/link';

const products = [
  {
    id: 1,
    title: 'Product 1',
    description: 'Description of product 1.',
    image: 'https://via.placeholder.com/150',
    price: '$10.00',
  },
  {
    id: 2,
    title: 'Product 2',
    description: 'Description of product 2.',
    image: 'https://via.placeholder.com/150',
    price: '$20.00',
  },
  {
    id: 1,
    title: 'Product 1',
    description: 'Description of product 1.',
    image: 'https://via.placeholder.com/150',
    price: '$10.00',
  },
  {
    id: 2,
    title: 'Product 2',
    description: 'Description of product 2.',
    image: 'https://via.placeholder.com/150',
    price: '$20.00',
  },
  {
    id: 1,
    title: 'Product 1',
    description: 'Description of product 1.',
    image: 'https://via.placeholder.com/150',
    price: '$10.00',
  },
  {
    id: 2,
    title: 'Product 2',
    description: 'Description of product 2.',
    image: 'https://via.placeholder.com/150',
    price: '$20.00',
  },
  {
    id: 1,
    title: 'Product 1',
    description: 'Description of product 1.',
    image: 'https://via.placeholder.com/150',
    price: '$10.00',
  },
  {
    id: 2,
    title: 'Product 2',
    description: 'Description of product 2.',
    image: 'https://via.placeholder.com/150',
    price: '$20.00',
  },
  {
    id: 1,
    title: 'Product 1',
    description: 'Description of product 1.',
    image: 'https://via.placeholder.com/150',
    price: '$10.00',
  },
  {
    id: 2,
    title: 'Product 2',
    description: 'Description of product 2.',
    image: 'https://via.placeholder.com/150',
    price: '$20.00',
  },
  {
    id: 1,
    title: 'Product 1',
    description: 'Description of product 1.',
    image: 'https://via.placeholder.com/150',
    price: '$10.00',
  },
  {
    id: 2,
    title: 'Product 2',
    description: 'Description of product 2.',
    image: 'https://via.placeholder.com/150',
    price: '$20.00',
  },
  {
    id: 1,
    title: 'Product 1',
    description: 'Description of product 1.',
    image: 'https://via.placeholder.com/150',
    price: '$10.00',
  },
  {
    id: 2,
    title: 'Product 2',
    description: 'Description of product 2.',
    image: 'https://via.placeholder.com/150',
    price: '$20.00',
  },
  {
    id: 1,
    title: 'Product 1',
    description: 'Description of product 1.',
    image: 'https://via.placeholder.com/150',
    price: '$10.00',
  },
  {
    id: 2,
    title: 'Product 2',
    description: 'Description of product 2.',
    image: 'https://via.placeholder.com/150',
    price: '$20.00',
  },
  {
    id: 1,
    title: 'Product 1',
    description: 'Description of product 1.',
    image: 'https://via.placeholder.com/150',
    price: '$10.00',
  },
  {
    id: 2,
    title: 'Product 2',
    description: 'Description of product 2.',
    image: 'https://via.placeholder.com/150',
    price: '$20.00',
  },
  {
    id: 1,
    title: 'Product 1',
    description: 'Description of product 1.',
    image: 'https://via.placeholder.com/150',
    price: '$10.00',
  },
  {
    id: 2,
    title: 'Product 2',
    description: 'Description of product 2.',
    image: 'https://via.placeholder.com/150',
    price: '$20.00',
  },
  {
    id: 1,
    title: 'Product 1',
    description: 'Description of product 1.',
    image: 'https://via.placeholder.com/150',
    price: '$10.00',
  },
  {
    id: 2,
    title: 'Product 2',
    description: 'Description of product 2.',
    image: 'https://via.placeholder.com/150',
    price: '$20.00',
  },
  {
    id: 1,
    title: 'Product 1',
    description: 'Description of product 1.',
    image: 'https://via.placeholder.com/150',
    price: '$10.00',
  },
  {
    id: 2,
    title: 'Product 2',
    description: 'Description of product 2.',
    image: 'https://via.placeholder.com/150',
    price: '$20.00',
  },
  // Add more products as needed
];

const ProductList: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ textAlign: 'center', marginTop: 8 }}>
        <nav>
          <Link href="/" passHref>
            <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
              Go back to Home
            </Button>
          </Link>
        </nav>
        <Typography variant="h2" component="h1" gutterBottom>
          Product List
        </Typography>
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  alt={product.title}
                  height="140"
                  image={product.image}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.description}
                  </Typography>
                  <Typography variant="h6" component="div">
                    {product.price}
                  </Typography>
                </CardContent>
                <Box sx={{ textAlign: 'center', marginBottom: 2 }}>
                  <Button variant="contained" color="primary">
                    Add to Cart
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default ProductList;
