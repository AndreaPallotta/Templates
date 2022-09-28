import { Chip, Divider, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

const CDivider = (props) => {
  const { align, chip, content, my, noFlex, orientation, sx = {} } = props;

  return (
    <Divider
      textAlign={align || 'center'}
      orientation={orientation || 'horizontal'}
      flexItem={noFlex === true ? false : true}
      sx={{
        marginY: my ? `${my}rem` : '1rem',
        ...sx,
      }}
    >
      {chip ? <Chip label={content} /> : <Typography>{content}</Typography>}
    </Divider>
  );
};

CDivider.propTypes = {
  content: PropTypes.string.isRequired,
  chip: PropTypes.bool,
  align: PropTypes.oneOf(['left', 'center', 'right']),
  orientation: PropTypes.string,
  noFlex: PropTypes.bool,
  my: PropTypes.string,
  sx: PropTypes.object,
};

export default CDivider;
