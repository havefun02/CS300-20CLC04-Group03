import FacebookLogin from 'react-facebook-login';
import { Context } from '../context/context';
import { useContext } from 'react';
import axios from 'axios';
const url = 'http://localhost:3000/user/login';
export function FacebookApi({ props }) {
  const context = useContext(Context);
  const [isLog, setIsLog] = [context.isLog, context.setIsLog];
  const [trigger, setTrigger] = [context.trigger, context.setTrigger];
  const responseFacebook = async (response) => {
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
  return (
    <FacebookLogin
      textButton="Facebook"
      appId="1151863172391288"
      fields="name,email,picture"
      callback={responseFacebook}
    ></FacebookLogin>
  );
}
