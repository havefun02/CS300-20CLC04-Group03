export function GoogleApi() {
  const responseGoogle = (response) => {
    var res = response.profileObj;
  };

  return (
    <GoogleLogin
      clientId="388042277002-cttefj6ut72isavdahnqsjhif17i0nku.apps.googleusercontent.com"
      buttonText="Login with Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
    ></GoogleLogin>
  );
}
