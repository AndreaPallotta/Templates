import React from 'react';
import { Button } from '@mui/material';
import useNotification from '@/hooks/useNotification';

const ChildPage = () => {
  const [showNotification] = useNotification();
  return (
    <Button
      onClick={() => {
        showNotification('test3', 'success');
      }}
    >
      Click Me Too
    </Button>
  );
};

export default ChildPage;
