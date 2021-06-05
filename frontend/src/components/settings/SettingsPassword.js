import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  TextField
} from '@material-ui/core';

import { apiUpdateMyPassword } from 'src/api/index';
import { store } from 'react-notifications-component';

const SettingsPassword = (props) => {
  const [password, setPassword] = useState({
    oldPassword: '',
    newPassword: '',
    newPasswordConfirm: ''
  });
  const [errorMsg, setErrorMsg] = useState({
    oldPassword: '',
    newPassword: ''
  });
  const updatePassword = async () => {
    try {
      const { newPassword, newPasswordConfirm, oldPassword } = password;
      if (!oldPassword) { setErrorMsg({ ...errorMsg, oldPassword: '必填' }); return; }
      if (!newPassword || !newPassword) { setErrorMsg({ ...errorMsg, newPassword: '必填' }); return; }
      if (newPassword !== newPasswordConfirm) { setErrorMsg({ ...errorMsg, newPassword: '新密碼不一致，請重新確認' }); return; }
      setErrorMsg({ oldPassword: '', newPassword: '' });
      await apiUpdateMyPassword(password);
      store.addNotification({
        title: '密碼更改成功!',
        message: 'Success',
        type: 'success',
        insert: 'bottom',
        container: 'bottom-center',
        dismiss: {
          duration: 1000,
          onScreen: false
        }
      });
    } catch (error) {
      setErrorMsg({ ...errorMsg, oldPassword: '舊的密碼不符合，請再試一次' });
    }
  };

  const handleChange = (event) => {
    const { oldPassword, newPassword, newPasswordConfirm } = password;
    if (oldPassword !== '') setErrorMsg({ ...errorMsg, oldPassword: '' });
    if (newPassword !== '' && newPasswordConfirm !== '') setErrorMsg({ ...errorMsg, newPassword: '' });
    setPassword({
      ...password,
      [event.target.name]: event.target.value
    });
  };

  return (
    <form {...props}>
      <Card>
        <CardHeader
          subheader="Update password"
          title="Password"
        />
        <Divider />
        <CardContent>
          <TextField
            fullWidth
            label="Old Password"
            margin="normal"
            name="oldPassword"
            onChange={handleChange}
            error={errorMsg.oldPassword}
            helperText={errorMsg.oldPassword && errorMsg.oldPassword}
            type="password"
            value={password.oldPassword}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="New Password"
            margin="normal"
            name="newPassword"
            onChange={handleChange}
            type="password"
            error={errorMsg.newPassword && errorMsg.newPassword}
            value={password.newPassword}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Confirm password"
            margin="normal"
            error={errorMsg.newPassword && errorMsg.newPassword}
            helperText={errorMsg.newPassword && errorMsg.newPassword}
            name="newPasswordConfirm"
            onChange={handleChange}
            type="password"
            value={password.newPasswordConfirm}
            variant="outlined"
          />
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            onClick={() => updatePassword()}
            color="primary"
            variant="contained"
          >
            Update
          </Button>
        </Box>
      </Card>
    </form>
  );
};

export default SettingsPassword;
