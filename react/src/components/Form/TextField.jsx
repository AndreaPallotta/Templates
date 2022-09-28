import useBoolean from '@/hooks/useBoolean';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

const CTextField = (props) => {
  const {
    end,
    error,
    focusFirst,
    label,
    onChange,
    password,
    readOnly,
    required,
    start,
    type,
    value,
    ...other
  } = props;

  const [showPassword, toggleShowPassword] = useBoolean(true);

  const prevDefault = (event) => {
    event.preventDefault();
  };

  const formatAdornment = (adornment, position) => (
    <InputAdornment position={position}>
      {typeof adornment === 'string' || !adornment.onClick ? (
        adornment.icon ?? adornment
      ) : (
        <IconButton
          aria-label={adornment.aria}
          edge={position}
          onClick={adornment.onClick}
          onMouseDown={prevDefault}
        >
          {adornment.icon}
        </IconButton>
      )}
    </InputAdornment>
  );

  const passwordAdornment = () =>
    formatAdornment(
      {
        icon: showPassword ? <VisibilityOff /> : <Visibility />,
        onClick: () => {
          toggleShowPassword();
        },
        aria: 'toggle-password-field-visibility',
      },
      'end'
    );

  const isAdornmentValid = (adornment) => {
    if (typeof adornment === 'string') return adornment.trim().length > 0;

    return typeof adornment === 'object' && adornment.icon !== undefined;
  };

  return (
    <FormControl fullWidth sx={{ marginBottom: '1.5rem' }}>
      <InputLabel htmlFor={`c-text-field-${label}}`}>{label}</InputLabel>
      <OutlinedInput
        autoFocus={focusFirst || false}
        error={error || false}
        id={`c-text-field-${label}}`}
        label={label}
        name={label.toLowerCase()}
        onChange={onChange}
        readOnly={readOnly || false}
        required={required ?? false}
        value={value}
        variant="outlined"
        {...(type && { type })}
        {...(password && {
          type: showPassword ? 'text' : 'password',
        })}
        {...(isAdornmentValid(start) && {
          startAdornment: formatAdornment(start, 'start'),
        })}
        {...(isAdornmentValid(end) && {
          startAdornment: formatAdornment(end, 'end'),
        })}
        {...(password &&
          value && {
            endAdornment: passwordAdornment(),
          })}
        {...other}
      />
    </FormControl>
  );
};

CTextField.propTypes = {
  end: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.exact({
      icon: PropTypes.element.isRequired,
      onClick: PropTypes.func,
      aria: PropTypes.string,
    }),
  ]),
  error: PropTypes.bool,
  focusFirst: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  password: PropTypes.bool,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  type: PropTypes.string,
  start: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.exact({
      icon: PropTypes.element.isRequired,
      onClick: PropTypes.func,
      aria: PropTypes.string,
    }),
  ]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default CTextField;
