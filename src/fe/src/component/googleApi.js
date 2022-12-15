import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';
import { useEffect } from 'react';
import axios from 'axios';
import { useState, useContext } from 'react';
import { Context } from '../context/context';
const url = 'http://localhost:3000/user/login';
export function GoogleApi({ props }) {
  const context = useContext(Context);
  const [isLog, setIsLog] = [context.isLog, context.setIsLog];
  const responseGoogle = async (response) => {
    let res = response.profileObj;
    console.log(response);
    // const req = await axios
    //   .post(url, { name: res.name, email: res.email })
    //   .then(() => {
    setIsLog(true);
    localStorage.setItem('name', res.name);
    localStorage.setItem('email', res.email);
    localStorage.setItem('token', response.accessToken);
    localStorage.setItem('isLog', 'true');
    props.setOverlay((overlay) => !overlay);
    // })
    // .catch((e) => e);
  };
  useEffect(() => {
    function start() {
      console.log('ok');
      gapi.client.init({
        clientId:
          '539433372016-4e1ka9oubi38hjh5ncb1domfolsuvcim.apps.googleusercontent.com',
        scope: 'email'
      });
    }

    gapi.load('client:auth2', start);
    return document.cookie.rem;
  }, []);

  return (
    <>
      <GoogleLogin
        clientId="539433372016-4e1ka9oubi38hjh5ncb1domfolsuvcim.apps.googleusercontent.com"
        buttonText="Google"
        onSuccess={responseGoogle}
        onFailure={(e) => {
          throw e;
        }}
        prompt={'select_account'}
        cookiePolicy={'single_host_origin'}
      ></GoogleLogin>
    </>
  );
}
