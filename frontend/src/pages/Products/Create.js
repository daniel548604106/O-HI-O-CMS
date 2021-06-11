import React, { useState } from 'react';
import TextEditor from 'src/components/global/TextEditor';
import {
  Button, Box, Grid, TextField, Container, Typography, Switch, FormControl, InputLabel, Input, FormHelperText
} from '@material-ui/core';
import { ChevronLeft as ChevronLeftIcon } from 'react-feather';
import { useNavigate } from 'react-router-dom';

export default function Edit() {
  const navigate = useNavigate();
  const [isProductActive, setProductActive] = useState(true);
  return (
    <Box m={2}>
      <Button onClick={() => navigate(-1)}>
        <ChevronLeftIcon />
        Back
      </Button>
      <Box p={3}>
        <Container>
          <Grid container spacing={1}>
            <Grid item>
              <Typography variant="p">產品名稱</Typography>
            </Grid>
            <Grid item xs={12} spacing={3}>
              <TextField />
            </Grid>
            <FormControl>
              <InputLabel htmlFor="my-input">电子邮件</InputLabel>
              <Input id="my-input" aria-describedby="my-helper-text" />
              <FormHelperText id="my-helper-text">我们绝不会分享您的邮件地址。</FormHelperText>
            </FormControl>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={12} spacing={3}>
              <Switch
                checked={isProductActive}
                onChange={() => setProductActive((prevState) => !prevState)}
                name="product switch"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />
            </Grid>
            <Grid item>
              <Typography variant="p">Enable Product</Typography>
            </Grid>
          </Grid>

          <Grid container spacing={1}>
            <Grid item xs={12} spacing={3}>
              <TextField />
            </Grid>
            <Grid item xs={12} spacing={3}>
              <TextField />
            </Grid>
          </Grid>
        </Container>
        <TextEditor />
        <Button color="primary" variant="contained">Save</Button>
      </Box>

    </Box>
  );
}
