import { BrowserRouter, Routes, Route, matchPath } from 'react-router-dom';
import Sidebar from '../components/side_bar';
import './approute.css';
import DashBoard from '../screens/dashboard';
import Order from '../screens/order';
import Transaction from '../screens/transaction';
import Manage from '../screens/manage';
import Customer from '../screens/customer';
import Login from '../screens/login';
import Register from '../screens/register';
import ChangePass from '../screens/changepass';
import Statistic from '../screens/statistic';
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../context/context';
import io from 'socket.io-client';

export default function AppRoute() {
  const context = useContext(Context);
  const [isLog, setIsLog] = [context.isLog, context.setIsLog];
  const [socket, setSocket] = useState(null);
  const [socketConnected, setSocketConnected] = useState(false);
  const [dt, setDt] = useState('');

  // establish socket connection
  // useEffect(() => {
  //   setSocket(io('http://localhost:3001'));
  // }, []);

  // subscribe to the socket event
  // useEffect(() => {
  //   if (!socket) return;

  //   socket.on('connect', () => {
  //     console.log('Connected');

  //     socket.emit('events', { test: 'test' });
  //     socket.emit('identity', 0, (response) =>
  //       console.log('Identity:', response)
  //     );
  //   });
  //   socket.on('events', function (data) {
  //     console.log('event', data);
  //   });
  //   socket.on('exception', function (data) {
  //     console.log('event', data);
  //   });
  //   socket.on('disconnect', function () {
  //     console.log('Disconnected');
  //   });
  // }, [socket]);

  return (
    <BrowserRouter>
      <div className="route-main">
        <div className="route-grid">
          {isLog == 'true' ? (
            <div className="route-row">
              <Sidebar></Sidebar>
              <Routes>
                <Route path="/" element={<DashBoard />}></Route>
                <Route path="/order" element={<Order />}></Route>
                <Route path="/statistic" element={<Statistic />}></Route>
                <Route path="/transaction" element={<Transaction />}></Route>
                <Route path="/management" element={<Manage />}></Route>
                <Route path="/customer" element={<Customer />}></Route>
                <Route path="/changepass" element={<ChangePass />}></Route>
              </Routes>
            </div>
          ) : (
            <Routes>
              <Route path={'/'} element={<Login />}></Route>
              <Route path={'/login'} element={<Login />}></Route>
              <Route path="/register" element={<Register />}></Route>
              <Route path="/changepass" element={<ChangePass />}></Route>
            </Routes>
          )}
        </div>
      </div>
    </BrowserRouter>
  );
}
