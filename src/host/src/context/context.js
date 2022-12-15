import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { io } from 'socket.io-client';
const Context = createContext();
const ContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [isLog, setIsLog] = useState(true);
  const [loading, setLoading] = useState(true);
  const [currentRoute, setCurrentRoute] = useState('/');
  const [avar, setAvar] = useState('');
  const [notify, setNotify] = useState([]);
  // establish socket connection
  React.useEffect(() => {
    setSocket(io('http://localhost:3001'));
  }, []);

  // subscribe to the socket event
  React.useEffect(() => {
    if (!socket) return;

    socket.on('connect', () => {
      console.log('Connected');

      socket.emit('join', { email: 'test' });
    });

    socket.on('disconnect', function () {
      console.log('Disconnected');
    });
  }, [socket]);

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
        setNotify,
        socket,
        setSocket
      }}
    >
      {children}
    </Context.Provider>
  );
};
export { Context, ContextProvider };
