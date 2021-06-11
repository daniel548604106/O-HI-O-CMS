import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import ListResults from 'src/components/global/ListResults';
import ListToolbar from 'src/components/global/ListToolbar';
import { apiGetUsers } from 'src/api/index';
import { useSearchParams } from 'react-router-dom';

const CustomerList = () => {
  const [users, setUsers] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [
    searchParams,
    setSearchParams,
  ] = useSearchParams();

  const handleGetUsers = async () => {
    try {
      const { data } = await apiGetUsers(searchKeyword);
      setUsers(data.users);
    } catch (error) {
      console.log(error);
    }
  };
  // 關鍵字搜尋
  useEffect(() => {
    if (searchKeyword) {
      setSearchParams(`search=${searchKeyword}`);
    }
    console.log(searchParams);
  }, [searchKeyword]);

  useEffect(() => {
    handleGetUsers();
  }, [searchKeyword]);
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
          <ListToolbar title="user" searchKeyword={searchKeyword} setSearchKeyword={setSearchKeyword} />
          <Box sx={{ pt: 3 }}>
            <ListResults customers={users} />
          </Box>
        </Container>
      </Box>
    </>

  );
};

export default CustomerList;
