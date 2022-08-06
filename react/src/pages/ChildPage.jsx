import useNotification from '@/hooks/useNotification';
import { Button } from '@mui/material';
import React from 'react';

const ChildPage = () => {
  const [showNotification] = useNotification();
  return (
    <Button
      onClick={() => {
        showNotification('test3', 'success');
      }}
    >
      Click Me
    </Button>
  );
};

export default ChildPage;
