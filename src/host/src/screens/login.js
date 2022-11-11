import { useState } from 'react';
import './login.css';
export default function Login() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = { id: id, password: password };
    //api
    console.log(form);
  };
  return (
    <div className="login">
      <div className="login-flex-box">
        <div className="login-child">
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="login-icon">
              <img src="data:image/png;base64,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"></img>
            </div>
            <div className="login-title">
              <h2>member login</h2>
            </div>
            <div className="login-input">
              <input
                onChange={(event) => {
                  setId(event.target.value);
                }}
                placeholder="id"
                type="text"
              ></input>
            </div>
            <div className="login-input">
              <input
                onChange={(event) => {
                  console.log(event.target.value);
                  setPassword(event.target.value);
                }}
                placeholder="password"
                type="password"
              ></input>
            </div>
            <div className="login-button">
              <button type="submit">submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
