import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate, Outlet } from 'react-router-dom';
import {
  Box, Container, Grid, Pagination
} from '@material-ui/core';
import ProductListToolbar from 'src/components/product/ProductListToolbar';
import ProductCard from 'src/components/product//ProductCard';
import { apiGetAllProducts } from 'src/api/index';

const Index = () => {
  const [products, setProducts] = useState([]);
  const [totalpage, setTotalPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  useEffect(() => {
    const getAllProducts = async () => {
      const { data } = await apiGetAllProducts();
      setProducts(data.products);
      setTotalPage(data.totalPage);
      setCurrentPage(data.currentPage);
    };

    getAllProducts();
  }, []);
  return (
    <>
      <Helmet>
        <title>Products | Material Kit</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth={false}>
          <ProductListToolbar />
          <Box sx={{ pt: 3 }}>
            <Grid container spacing={3}>
              {products.map((product) => (
                <Grid item key={product.id} lg={4} md={6} xs={12}>
                  <ProductCard onClick={() => navigate(`/app/products/${product.id}/edit`)} product={product} />
                </Grid>
              ))}
            </Grid>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              pt: 3
            }}
          >
            <Pagination page={currentPage} totalpage={totalpage} color="primary" count={totalpage} size="small" />
          </Box>
        </Container>
      </Box>
      <Outlet />
    </>
  );
};

export default Index;
