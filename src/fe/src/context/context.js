import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
const Context = createContext();
const ContextProvider = ({ children }) => {
  const [id, setId] = useState(null);
  const [trigger, setTrigger] = useState(false);
  const [token, setToken] = useState();
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [address, setAdress] = useState(null);
  const [sex, setSex] = useState(null);
  const [currentRoute, setCurrentRoute] = useState('/');

  useEffect(() => {
    let token = sessionStorage.getItem('token');
    let email = sessionStorage.getItem('email');
    const options = {
      headers: {
        Authorization: 'Basic ' + token + ':' + email
        // 'content-type': 'multipart/form-data'
      }
    };
    const fetch = async () => {
      const url = `http://localhost:3001/user/get-customer`;
      const res = await axios.get(url, options).then(
        (data) => {
          setId(data.data.id_api);
          setName(data.data.name);
          setEmail(data.data.email);
          setSex(data.data.sex);
          setPhone(data.data.phone);
          setAdress(data.data.address);
        },
        (rej) => {
          setId(null);
          setName(null);
          setEmail(null);
          setSex(null);
          setPhone(null);
          setAdress(null);
        }
      );
    };
    fetch();
  }, [trigger]);

  return (
    <Context.Provider
      value={{
        name,
        email,
        token,
        id,
        trigger,
        setTrigger,
        sex,
        phone,
        address,
        setAdress
      }}
    >
      {children}
    </Context.Provider>
  );
};
export { Context, ContextProvider };
