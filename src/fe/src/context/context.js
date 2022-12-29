import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
const Context = createContext();
const ContextProvider = ({ children }) => {
  const [isLog, setIsLog] = useState(false);
  const [id, setId] = useState(null);
  const [trigger, setTrigger] = useState(false);
  const [access, setAccess] = useState(false);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [sex, setSex] = useState(null);
  const [date, setDate] = useState({ day: 1, month: 2, year: 3 });

  React.useEffect(() => {
    let getLocal = sessionStorage.getItem('isLog');
    if (getLocal !== null) setIsLog(() => getLocal);

    let tokenLocal = sessionStorage.getItem('token');
    if (tokenLocal !== null) setAccess(() => tokenLocal);

    let emailLocal = sessionStorage.getItem('email');
    if (emailLocal !== null) setEmail(() => emailLocal);
  }, [isLog, trigger]);
  React.useEffect(() => {
    const fetchData = async () => {
      const url = `http://localhost:3001/auth/set-data:${email}`;
      //token
      const res = await axios.get(url).then((res) => {
        // setId(res.data);
      });
    };
  }, [trigger]);

  return (
    <Context.Provider
      value={{
        isLog,
        setIsLog,
        name,
        email,
        access,
        setAccess,
        id,
        trigger,
        setTrigger,
        sex,
        phone,
        date
      }}
    >
      {children}
    </Context.Provider>
  );
};
export { Context, ContextProvider };
