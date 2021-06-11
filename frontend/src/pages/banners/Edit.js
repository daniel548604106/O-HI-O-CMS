import React, { useEffect, useState } from 'react';
import {
  Button, Box, TextField, Card, CardMedia, CardContent, CardActions, Typography
} from '@material-ui/core';
import { useNavigate, useParams } from 'react-router-dom';
import { ChevronLeft as ChevronLeftIcon, Upload as UploadIcon } from 'react-feather';
import { apiGetBanner, apiPatchBanner } from 'src/api/index';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
    '&:hover': {
      '& $uploadIcon': {
        display: 'block',
      },
      '& $image': {
        opacity: 0.8,
      },
      '& $overlay': {
        display: 'block',
        cursor: 'pointer'
      }
    },
  },
  uploadIcon: {
    display: 'none',
    textAlign: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    zIndex: '50',
    cursor: 'pointer',
    color: 'white',
    transform: 'translate(-50%,-50%)'
  },
  image: {
    opacity: 1,
    position: 'relative',
    width: '100%'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.1)',
    display: 'none'
  }
}));
const Edit = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { id } = useParams();
  const [banner, setBanner] = useState({});

  const getBanner = async () => {
    try {
      const { data } = await apiGetBanner(id);
      console.log(data);
      setBanner(data.banner);
    } catch (error) {
      console.log(error);
    }
  };

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

  const saveEdit = async () => {
    try {
      await apiPatchBanner(id, banner);
      getBanner();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBanner();
  }, []);
  return (
    <Box p={3}>
      <Button startIcon={<ChevronLeftIcon />} size="small" onClick={() => navigate(-1)}>Back</Button>
      <Box py={3}>
        <Card>
          <CardActions className={classes.root}>
            <form>
              <label htmlFor="upload">
                <CardMedia className={classes.image} src={banner.image} component="img" style={{ cursor: 'pointer' }} />
                <div className={classes.overlay} />
                <input onChange={(e) => addImageToPost(e)} type="file" accept="image/*" id="upload" style={{ display: 'none' }} />
              </label>
              <Box className={classes.uploadIcon}>
                <UploadIcon />
                <Typography>上傳圖片</Typography>
              </Box>
            </form>
          </CardActions>
          <CardContent>
            <form>
              <Box p={1}>
                <TextField fullWidth label="Title" value={banner.title || ''} onChange={(e) => setBanner({ ...banner, title: e.target.value })} />
              </Box>
              <Box p={1}>
                <TextField fullWidth label="Link" value={banner.link || ''} onChange={(e) => setBanner({ ...banner, link: e.target.value })} />
              </Box>
            </form>
          </CardContent>
        </Card>
      </Box>
      <Box display="flex" justifyContent="flex-end">
        <Button style={{ marginRight: '10px' }} variant="outlined" align="right">取消</Button>
        <Button variant="contained" align="right" onClick={() => saveEdit()}>Save</Button>
      </Box>
    </Box>
  );
};

export default Edit;
