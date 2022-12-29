import './changepass.css';
import axios from 'axios';
import { useState } from 'react';
import { Context } from '../context/context';
import { useContext } from 'react';
export default function ChangePass() {
  const context = useContext(Context);
  const [isLog, setIsLog] = [context.isLog, context.setIsLog];
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (confirm === newPassword) {
      const form = { password: newPassword };
      const res = await axios
        .post('http://localhost:3001/host/change-pass', form)
        .then((res) => {
          localStorage.setItem('token', res.data);
          localStorage.setItem('isLog', true);
          setIsLog(() => true);
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
      <form onSubmit={() => handleSubmit}>
        <div className="Changepass-container">
          <h1>Change Password</h1>
          <input
            type="password"
            placeholder="Enter Old Password"
            name="old-psw"
            id="old-psw"
            required
            onChange={(e) => setPassword(e.target.value)}
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
