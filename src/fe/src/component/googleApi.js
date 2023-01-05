import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';
import { useEffect } from 'react';
import axios from 'axios';
import { useState, useContext } from 'react';
import { Context } from '../context/context';
const url = 'http://localhost:3001/user/login';
export function GoogleApi({ props }) {
  const context = useContext(Context);
  const [trigger, setTrigger] = [context.trigger, context.setTrigger];
  const responseGoogle = async (response) => {
    let res = response.profileObj;
    const req = await axios
      .post(url, {
        name: res.name,
        email: res.email,
        token: response.accessToken
      })
      .then((data) => {
        console.log(data);
        sessionStorage.setItem('token', data.data.token);
        sessionStorage.setItem('email', data.data.email);
        props.setOverlay((overlay) => !overlay);
        setTrigger((trigger) => !trigger);
      })
      .catch((e) => e);
  };
  useEffect(() => {
    function start() {
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
