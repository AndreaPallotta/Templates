import NotificationContext from '@/contexts/Notification';
import { useContext, useState } from 'react';

const useNotification = (isDefault) => {
  const { notification, setNotification } = useContext(NotificationContext);
  const [state, setState] = useState({
    open: false,
    message: '',
    severity: '',
  });

  const handleChange = (open, message, severity) => {
    if (isDefault) {
      setState({ open, message, severity });
    }
    setNotification(open, message, severity);
  };

  const open = (message = '', severity = 'info') => {
    handleChange(true, message, severity);
  };

  const close = (_, reason) => {
    if (reason === 'clickaway') return;
    handleChange(false, '', '');
  };

  return [
    open,
    close,
    isDefault ? state : notification,
    isDefault ? handleChange : () => {},
  ];
};

export default useNotification;
