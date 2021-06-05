import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import ListResults from 'src/components/global/ListResults';
import ListToolbar from 'src/components/global/ListToolbar';
import { apiGetShops } from 'src/api/index';

const ShopList = () => {
  const [shops, setShops] = useState([]);
  useEffect(() => {
    const handleGetShops = async () => {
      try {
        const { data } = await apiGetShops();

        setShops(data.shops);
      } catch (error) {
        console.log(error);
      }
    };

    handleGetShops();
  }, []);
  return (
    <>
      <Helmet>
        <title>Shops | O.HI.O</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth={false}>
          <ListToolbar title="shop" />
          <Box sx={{ pt: 3 }}>
            <ListResults customers={shops} />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default ShopList;
