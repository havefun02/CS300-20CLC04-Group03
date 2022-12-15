import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
const Context = createContext();
const ContextProvider = ({ children }) => {
  const [isLog, setIsLog] = useState(false);
  const [token, setToken] = useState(null);
  const [access, setAccess] = useState(false);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  React.useEffect(() => {
    let getLocal = localStorage.getItem('isLog');
    if (getLocal !== null) setIsLog(() => getLocal);

    let tokenLocal = localStorage.getItem('token');
    if (tokenLocal !== null) setToken(() => tokenLocal);

    let nameLocal = localStorage.getItem('name');
    if (nameLocal !== null) setName(() => nameLocal);

    let emailLocal = localStorage.getItem('email');
    if (emailLocal !== null) setEmail(() => emailLocal);
  }, [isLog]);
  React.useEffect(() => {
    const fetchData = async () => {};
  });

  return (
    <Context.Provider
      value={{
        isLog,
        setIsLog,
        token,
        setToken,
        name,
        setName,
        email,
        setEmail,
        access,
        setAccess
      }}
    >
      {children}
    </Context.Provider>
  );
};
export { Context, ContextProvider };
