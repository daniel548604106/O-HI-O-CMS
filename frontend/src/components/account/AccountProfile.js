import { useRef, useState } from 'react';

import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography
} from '@material-ui/core';
import PropTypes from 'prop-types';

// const accountInfo = {
//   avatar: '',
//   city: 'Los Angeles',
//   country: 'USA',
//   jobTitle: 'Senior Developer',
//   name: 'Katarina Smith',
//   timezone: 'GTM-7'
// };

const AccountProfile = ({ accountInfo }) => {
  const fileRef = useRef(null);
  const [previewImage, setPreviewImage] = useState('');
  const preview = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      // Asynchronous function , read the file as an URL
      reader.readAsDataURL(e.target.files[0]);
    }
    // When it comes back , it comes back as a result
    reader.onload = (readerEvent) => {
      setPreviewImage(readerEvent.target.result);
    };
  };

  const saveUploadedImage = async () => {
    try {
      console.log('saved');
      setPreviewImage('');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Card>
      <CardContent>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Avatar
            src={previewImage || accountInfo.avatar}
            sx={{
              height: 100,
              width: 100
            }}
          />
          <Typography color="textPrimary" gutterBottom variant="h3">
            {`${accountInfo.firstName}
             ${accountInfo.lastName}`}
          </Typography>
          <Typography color="textSecondary" variant="body1">
            {`${accountInfo.email}`}
          </Typography>
          <Typography color="textSecondary" variant="body1">
            {`${accountInfo.country}`}
          </Typography>
        </Box>
      </CardContent>
      <Divider />
      <CardActions>
        {previewImage ? (
          <Button
            onClick={() => saveUploadedImage()}
            fullWidth
            variant="text"
            color="primary"
          >
            Save
          </Button>
        ) : (
          <Button
            onClick={() => fileRef.current.click()}
            color="primary"
            fullWidth
            variant="text"
          >
            Upload picture
          </Button>
        )}
        <input onChange={(e) => preview(e)} type="file" hidden ref={fileRef} />
      </CardActions>
    </Card>
  );
};

AccountProfile.propTypes = {
  accountInfo: PropTypes.object
};

export default AccountProfile;
