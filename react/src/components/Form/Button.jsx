import { CircularProgress, IconButton, Tooltip } from '@mui/material';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import React from 'react';

const CButton = (props) => {
  const {
    disabled,
    end,
    icon,
    iconOnly,
    label,
    loading,
    my,
    onClick = () => {},
    size,
    start,
    style = {},
    tooltip,
    variant,
    ...other
  } = props;

  if (iconOnly) {
    return (
      <IconButton aria-label={label} onClick={onClick} size={size || 'large'}>
        {icon}
      </IconButton>
    );
  }

  return tooltip ? (
    <Tooltip title={tooltip} arrow>
      <Button
        disabled={disabled || false}
        onClick={onClick}
        size={size || 'large'}
        sx={{ marginY: my ? `${my}rem` : 0, ...style }}
        variant={variant || 'contained'}
        {...(start && { startIcon: start })}
        {...(end && loading !== true && { endIcon: end })}
        {...(loading === true && {
          endIcon: <CircularProgress size={20} color="inherit" />,
        })}
        {...other}
      >
        {label}
      </Button>
    </Tooltip>
  ) : (
    <Button
      disabled={disabled || false}
      onClick={onClick}
      size={size || 'large'}
      sx={{ marginY: my ? `${my}rem` : 0, ...style }}
      variant={variant || 'contained'}
      {...(start && { startIcon: start })}
      {...(end && loading !== true && { endIcon: end })}
      {...(loading === true && {
        endIcon: <CircularProgress size={20} color="inherit" />,
      })}
      {...other}
    >
      {label}
    </Button>
  );
};

CButton.propTypes = {
  disabled: PropTypes.bool,
  end: PropTypes.any,
  icon: PropTypes.any,
  iconOnly: PropTypes.bool,
  label: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  my: PropTypes.number,
  onClick: PropTypes.func.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  start: PropTypes.any,
  style: PropTypes.object,
  tooltip: PropTypes.string,
  variant: PropTypes.oneOf(['text', 'contained', 'outlined']),
};

export default CButton;
