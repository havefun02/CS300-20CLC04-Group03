import FacebookLogin from 'react-facebook-login';
import { Context } from '../context/context';
import { useContext } from 'react';
import axios from 'axios';
const url = 'http://localhost:3001/user/login';
export function FacebookApi({ props }) {
  const context = useContext(Context);
  const [trigger, setTrigger] = [context.trigger, context.setTrigger];
  const responseFacebook = async (response) => {
    let res = response;
    console.log(response);
    const req = await axios
      .post(url, {
        name: res.name,
        email: res.email,
        token: res.accessToken
      })
      .then((data) => {
        sessionStorage.setItem('token', data.data);
        props.setOverlay((overlay) => !overlay);
        setTrigger((trigger) => !trigger);
      })
      .catch((e) => e);
  };
  return (
    <FacebookLogin
      textButton="Facebook"
      appId="1151863172391288"
      fields="name,email,picture"
      callback={responseFacebook}
    ></FacebookLogin>
  );
}
