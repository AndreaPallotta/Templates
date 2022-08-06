import { useState } from 'react';

const useBoolean = () => {
  const [state, setState] = useState(false);

  const handleSetState = (state) => {
    if (state !== undefined) {
      setState(state === true);
    }
    setState((prev) => !prev);
  };

  const toggle = (state, callback) => {
    if (callback) {
      callback().then(() => {
        handleSetState(state);
      });
    }
    setState;
  };

  return [state, toggle];
};

export default useBoolean;
