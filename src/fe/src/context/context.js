import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
const Context = createContext();
const ContextProvider = ({ children }) => {
  const [id, setId] = useState();
  const [trigger, setTrigger] = useState(false);
  const [token, setToken] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [address, setAdress] = useState();
  const [sex, setSex] = useState();
  React.useEffect(() => {
    let token = sessionStorage.getItem('token');
    if (token) setToken(token);
    else setToken();
  }, [trigger]);

  useEffect(() => {
    const options = {
      headers: {
        Authorization: 'Bearer ' + token
        // 'content-type': 'multipart/form-data'
      }
    };
    const fetch = async () => {
      const url = `http://localhost:3001/user/get-user`;
      let token1 = sessionStorage.getItem('token');
      const res = await axios
        .post(url, { token: token1 }, options)
        .then((data) => {
          console.log(data);
          setId(data.data.id_api);
          setName(data.data.name);
          setEmail(data.data.email);
          setSex(data.data.sex);
          setPhone(data.data.phone);
          setAdress(data.data.address);
        });
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
