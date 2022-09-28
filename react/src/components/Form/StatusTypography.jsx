import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import React from 'react';

const StatusTypography = ({ content, isValid = false, ...other }) => {
  return (
    <Typography
      variant="small"
      color={isValid ? 'success.main' : 'error.main'}
      {...other}
    >
      {isValid ? `✅ ${content}` : `❌ ${content}`}
    </Typography>
  );
};

StatusTypography.propTypes = {
  content: PropTypes.string.isRequired,
  isValid: PropTypes.bool,
};

export default StatusTypography;
