import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
const Context = createContext();
const ContextProvider = ({ children }) => {
  const [isLog, setIsLog] = useState(true);
  const [loading, setLoading] = useState(true);
  const [currentRoute, setCurrentRoute] = useState('/');
  React.useEffect(() => {
    const getLocal = localStorage.getItem('isLog');
    if (getLocal !== null) setIsLog(() => getLocal);
  }, []);

  const fetchData = async () => {};

  return (
    <Context.Provider
      value={{
        isLog,
        setIsLog,
        loading,
        setLoading,
        currentRoute,
        setCurrentRoute
      }}
    >
      {children}
    </Context.Provider>
  );
};
export { Context, ContextProvider };
