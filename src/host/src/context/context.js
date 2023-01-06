import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import axios from 'axios';
const Context = createContext();
const ContextProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [socket, setSocket] = useState(null);
  const [isLog, setIsLog] = useState(false);
  const [currentRoute, setCurrentRoute] = useState('/');
  const [notify, setNotify] = useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      const options = {
        headers: {
          Authorization: 'Bearer ' + token
          // 'content-type': 'multipart/form-data'
        }
      };
      const url = 'http://localhost:3001/host/get-notify';
      const res = await axios.get(url, options).then((data) => {
        setNotify(data.data);
        console.log(data);
      });
    };
    fetchData();
  }, [fetch]);
  React.useEffect(() => {
    const getLocal = localStorage.getItem('isLog');
    if (getLocal !== null) setIsLog(() => getLocal);
    const getTokenLocal = localStorage.getItem('token');
    if (getTokenLocal !== null) setToken(() => getTokenLocal);
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

  return (
    <Context.Provider
      value={{
        isLog,
        setIsLog,
        token,
        setToken,
        currentRoute,
        setCurrentRoute,
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
