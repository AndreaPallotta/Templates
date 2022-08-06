import { createContext } from 'react';

const NotificationContext = createContext({
  notification: { open: false, message: '', severity: '' },
  setNotification: () => {},
});

export default NotificationContext;
