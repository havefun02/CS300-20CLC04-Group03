import GoogleLogin from 'react-google-login';
function App() {
  const responseGoogle = (response) => {
    console.log(response);
    var res = response.profileObj;
    console.log(res);
  };
  return (
    <div className="App">
      <GoogleLogin
        clientId="388042277002-cttefj6ut72isavdahnqsjhif17i0nku.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      ></GoogleLogin>
    </div>
  );
}

export default App;
