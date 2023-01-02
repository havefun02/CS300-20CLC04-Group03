import './changepass.css';
import axios from 'axios';
import { useState } from 'react';
import { Context } from '../context/context';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
export default function ChangePass() {
  const navigate = useNavigate();
  const context = useContext(Context);
  const [isLog, setIsLog] = [context.isLog, context.setIsLog];
  const [pre, setPre] = useState('');
  const [confirm, setConfirm] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (confirm === newPassword) {
      const form = { pre: pre, password: newPassword };
      const token = localStorage.getItem('token');
      console.log(token);
      const options = {
        headers: {
          Authorization: 'Bearer ' + token
          // 'content-type': 'multipart/form-data'
        }
      };
      const res = await axios
        .post('http://localhost:3001/host/change-pass', form, options)
        .then((res) => {
          localStorage.clear();
          setIsLog(() => false);
          navigate('/');
        })
        .catch((err) => {
          throw err;
        });
    }
  };
  return (
    <div
      style={{
        flex: '1',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <form onSubmit={handleSubmit}>
        <div className="Changepass-container">
          <h1>Change Password</h1>
          <input
            type="password"
            placeholder="Enter Old Password"
            name="old-psw"
            id="old-psw"
            required
            onChange={(e) => setPre(e.target.value)}
          ></input>

          <input
            type="password"
            placeholder="Enter New Password"
            name="new-psw"
            id="new-psw"
            required
            onChange={(e) => setNewPassword(e.target.value)}
          ></input>
          <input
            type="password"
            placeholder="Confirm Password"
            name="psw-repeat"
            id="psw-repeat"
            required
            onChange={(e) => setConfirm(e.target.value)}
          ></input>
          <button type="submit" className="Changepass-confirm">
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
}
