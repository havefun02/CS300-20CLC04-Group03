import { useEffect, useState } from 'react';
import GoogleLogin from 'react-google-login';
function App() {
  const [add, setAdd] = useState(0); //1 lan duy nhat
  const [hide, setHide] = useState(true);
  console.log(add);
  useEffect(() => {
    console.log('use effect ');
  }, [hide]);
  const responseGoogle = (response) => {
    console.log(response);
    var res = response.profileObj;
    console.log(res);
  };
  const handleClick = () => {
    setAdd((add) => add + 1);
  };
  return (
    <div className="App">
      {console.log('render')}
      <button
        onClick={() => {
          setHide((hide) => !hide);
        }}
      >
        click
      </button>

      {hide && <ReturnH2 />}

      <button onClick={handleClick}>click me</button>
      <h2>{add}</h2>
      <GoogleLogin
        clientId="388042277002-cttefj6ut72isavdahnqsjhif17i0nku.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      ></GoogleLogin>
    </div>
  );
}

function ReturnH2() {
  return <h2>hello world</h2>;
}

export default App;
