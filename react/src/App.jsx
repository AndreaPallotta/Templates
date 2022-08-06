import React, { useEffect } from 'react';
import { app } from './utils/env';
import Notification from './components/Notification';
import useNotification from './hooks/useNotification';
import NotificationContext from './contexts/Notification';
import ChildPage from './pages/ChildPage';

function App() {
  const [, close, notification, setNotification] = useNotification(true);

  useEffect(() => {
    document.title = app.name;
  }, []);

  return (
    <NotificationContext.Provider value={{ notification, setNotification }}>
      <div className='App'>
        <ChildPage />
        <Notification
          open={notification.open}
          onClose={close}
          message={notification.message}
          severity={notification.severity}
        />
      </div>
    </NotificationContext.Provider>
  );
}

export default App;
