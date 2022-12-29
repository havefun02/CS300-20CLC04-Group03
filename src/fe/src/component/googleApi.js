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
  const [trigger, setTrigger] = [context.trigger, context.setTrigger];
  const responseGoogle = async (response) => {
    let res = response.profileObj;
    console.log(response);
    const req = await axios
      .post(url, { name: res.name, email: res.email })
      .then((res) => {
        setIsLog(true);
        setTrigger((trigger) => !trigger);
        sessionStorage.setItem('email', res.email);
        sessionStorage.setItem('token', true);
        sessionStorage.setItem('isLog', 'true');
        sessionStorage.setItem('id', '1');
        props.setOverlay((overlay) => !overlay);
      })
      .catch((e) => e);
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
