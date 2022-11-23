import FacebookLogin from 'react-facebook-login';
export function FacebookApi() {
  const responseFacebook = (response) => {
    console.log(response);
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
