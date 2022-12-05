import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { useNavigate, useHisory } from 'react-router-dom';
const Context = createContext();
const ContextProvider = ({ children }) => {
  const [isLog, setIsLog] = useState(false);
  const [loading, setLoading] = useState(true);
  const [currentRoute, setCurrentRoute] = useState('/');
  const [avar, setAvar] = useState('');
  const [notify, setNotify] = useState([]);

  React.useEffect(() => {
    const getLocal = localStorage.getItem('isLog');
    if (getLocal !== null) setIsLog(() => getLocal);
  }, [isLog]);
  React.useEffect(() => {
    if (isLog) {
      const getLocalPath = sessionStorage.getItem('path');
      if (getLocalPath !== null) setCurrentRoute(() => getLocalPath);
    }
  });
  React.useEffect(() => {
    if (isLog) {
      const fetchData = async () => {};
    }
  }, [notify]);
  React.useEffect(() => {
    if (isLog) {
      const fetchData = async () => {};
    }
  }, [avar]);

  return (
    <Context.Provider
      value={{
        isLog,
        setIsLog,
        loading,
        setLoading,
        currentRoute,
        setCurrentRoute,
        avar,
        setAvar,
        notify,
        setNotify
      }}
    >
      {children}
    </Context.Provider>
  );
};
export { Context, ContextProvider };
