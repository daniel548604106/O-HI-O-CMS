import { Helmet } from 'react-helmet';
import { useState } from 'react';
import { Box, Container, Grid } from '@material-ui/core';
import AccountProfile from 'src/components/account/AccountProfile';
import AccountProfileDetails from 'src/components/account/AccountProfileDetails';

const Account = () => {
  const [accountInfo, setAccountInfo] = useState({
    firstName: 'Katarina',
    lastName: 'Smith',
    email: 'demo@devias.io',
    phone: '',
    state: 'Alabama',
    country: 'USA',
    avatar: ''
  });
  return (
    <>
      <Helmet>
        <title>Account | Material Kit</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item lg={4} md={6} xs={12}>
              <AccountProfile
                accountInfo={accountInfo}
                setAccountInfo={setAccountInfo}
              />
            </Grid>
            <Grid item lg={8} md={6} xs={12}>
              <AccountProfileDetails
                accountInfo={accountInfo}
                setAccountInfo={setAccountInfo}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Account;
