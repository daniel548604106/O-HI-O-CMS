import React, { useEffect, useState } from 'react';
import BannerCard from 'src/components/banners/BannerCard';
import { Box, Grid, Button } from '@material-ui/core';
import { apiGetBanners } from 'src/api/index';
import { FilePlus as AddIcon } from 'react-feather';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLoading } from 'src/redux/slices/globalSlice';

const Index = () => {
  const [banners, setBanners] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const getBanners = async () => {
      try {
        dispatch(setLoading(true));
        const { data } = await apiGetBanners();
        console.log(data);
        setBanners(data.banners);
        dispatch(setLoading(false));
      } catch (error) {
        console.log(error);
      }
    };

    getBanners();
  }, []);
  return (
    <div>
      <Box p={3}>
        <Box
          display="flex"
          justifyContent="flex-end"
          style={{ margin: '20px 0' }}
        >
          <Button
            onClick={() => navigate('/app/banners/create')}
            startIcon={<AddIcon />}
            variant="contained"
          >
            新增
          </Button>
        </Box>
        <Grid container spacing={3}>
          {banners && banners.map((banner, idx) => (
            <Grid key={banner.title} item xs={12} sm={6} md={4}>
              <BannerCard banner={banner} idx={idx} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Index;
