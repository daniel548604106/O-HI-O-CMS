import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import ListResults from 'src/components/global/ListResults';
import ListToolbar from 'src/components/global/ListToolbar';
import { apiGetUsers } from 'src/api/index';

const CustomerList = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const handleGetUsers = async () => {
      try {
        const { data } = await apiGetUsers();
        setUsers(data.users);
      } catch (error) {
        console.log(error);
      }
    };
    handleGetUsers();
  }, []);
  return (
    <>
      <Helmet>
        <title>Users | O.HI.O</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth={false}>
          <ListToolbar title="user" />
          <Box sx={{ pt: 3 }}>
            <ListResults customers={users} />
          </Box>
        </Container>
      </Box>
    </>

  );
};

export default CustomerList;
