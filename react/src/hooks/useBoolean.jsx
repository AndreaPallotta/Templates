import { useState } from 'react';

const useBoolean = () => {
  const [state, setState] = useState(false);

  const handleSetState = (newState) => {
    if (newState !== undefined) {
      setState(newState === true);
    } else {
      setState((prevState) => !prevState);
    }
  };

  const toggle = (newState, callback) => {
    if (callback) {
      callback().then(() => {
        handleSetState(newState);
      });
    }
    handleSetState(newState);
  };

  return [state, toggle];
};

export default useBoolean;
