import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card, CardActions, CardContent, Button, TextField, Box, CardMedia
} from '@material-ui/core';
import { Plus as AddIcon, ChevronLeft as ChevronLeftIcon } from 'react-feather';

const Create = () => {
  const navigate = useNavigate();
  const [banner, setBanner] = useState({});
  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      // Asynchronous function , read the file as an URL
      reader.readAsDataURL(e.target.files[0]);
    }
    // When it comes back , it comes back as a result
    console.log('read', banner);

    reader.onload = (readerEvent) => {
      setBanner({ ...banner, image: readerEvent.target.result });
    };
    console.log('read', banner);
  };

  return (
    <Box p={3}>
      <Button startIcon={<ChevronLeftIcon />} size="small" onClick={() => navigate(-1)}>Back</Button>
      <Box py={3}>
        <Card>
          <CardActions>
            <form>
              <label htmlFor="upload">
                {
                  banner.image ? (
                    <CardMedia src={banner.image} component="img" style={{ cursor: 'pointer' }} />
                  ) : (
                    <AddIcon />
                  )
                }
                <input onChange={(e) => addImageToPost(e)} id="upload" type="file" style={{ display: 'none' }} />
              </label>
            </form>
          </CardActions>
          <CardContent>
            <form>
              <Box p={1}>
                <TextField fullWidth onChange={(e) => setBanner({ ...banner, title: e.target.value })} label="Title" value={banner.title || ''} />
              </Box>
              <Box p={1}>
                <TextField fullWidth onChange={(e) => setBanner({ ...banner, link: e.target.value })} label="Link" value={banner.link || ''} />
              </Box>
            </form>
          </CardContent>
        </Card>
      </Box>
      <Box display="flex" justifyContent="flex-end">
        <Button variant="contained">新增</Button>
      </Box>
    </Box>
  );
};

export default Create;
