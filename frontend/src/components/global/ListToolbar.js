import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';
import PropTypes from 'prop-types';

const ListToolbar = ({ title, searchKeyword, setSearchKeyword }) => {
  const handleSearch = (e) => {
    setSearchKeyword(e.target.value);
  };
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end'
        }}
      >
        <Button>
          Import
        </Button>
        <Button sx={{ mx: 1 }}>
          Export
        </Button>
        <Button
          color="primary"
          variant="contained"
        >
          Add
          {' '}
          {title}

        </Button>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Card>
          <CardContent>
            <Box sx={{ maxWidth: 500 }}>
              <TextField
                fullWidth
                onChange={(e) => handleSearch(e)}
                value={searchKeyword}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SvgIcon
                        fontSize="small"
                        color="action"
                      >
                        <SearchIcon />
                      </SvgIcon>
                    </InputAdornment>
                  )
                }}
                placeholder={`Search ${title}`}
                variant="outlined"
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

ListToolbar.propTypes = {
  title: PropTypes.string.isRequired,
  setSearchKeyword: PropTypes.func,
  searchKeyword: PropTypes.string
};
export default ListToolbar;
