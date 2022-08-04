import { useEffect } from 'react';
import { app } from './utils/env';

function App() {
  useEffect(() => {
    document.title = app.name;
  }, []);

  return <div className='App'></div>;
}

export default App;
