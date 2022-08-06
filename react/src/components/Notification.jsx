import Alert from '@/components/AlertRef';
import Snackbar from '@mui/material/Snackbar';
import PropTypes from 'prop-types';
import React from 'react';

const Notification = (props) => {
  const { open, onClose, message, severity } = props;

  return (
    <Snackbar
      key={new Date().getTime()}
      open={open}
      autoHideDuration={3000}
      onClose={onClose}
    >
      <Alert onClose={onClose} severity={severity} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

Notification.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  severity: PropTypes.string.isRequired,
};

export default Notification;
