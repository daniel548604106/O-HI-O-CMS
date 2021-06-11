import React from 'react';
import {
  Card, CardMedia, Typography, IconButton, CardContent, Box
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { Trash2 as TrashIcon, Edit as EditIcon } from 'react-feather';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles(() => (
  {
    root: {
      position: 'relative'
    },
    sequence: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '30px',
      height: '30px',
      borderRadius: '50%',
      display: 'flex',
      transform: 'translate(-50%,-50%)',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'white',
      border: '1px solid black'
    }
  }
));
const BannerCard = ({ banner, idx }) => {
  const navigate = useNavigate();
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Card>
        <Typography className={classes.sequence}>
          {idx + 1}
        </Typography>
        <CardMedia component="img" height="200" src={banner.image} />
        <CardContent>
          <Typography variant="subtitle">Title</Typography>
          <Typography>{banner.title}</Typography>
          <Typography>{banner.link || ''}</Typography>
          <Box display="flex" justifyContent="flex-end">
            <IconButton color="secondary"><TrashIcon /></IconButton>
            <IconButton onClick={() => navigate(`/app/banners/${banner._id}/edit`)} style={{ marginLeft: '5px' }}><EditIcon /></IconButton>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};

BannerCard.propTypes = {
  banner: PropTypes.object,
  idx: PropTypes.number
};
export default BannerCard;
