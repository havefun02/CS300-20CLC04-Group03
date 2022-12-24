import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from '../components/side_bar';
import './approute.css';
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

export default function AppRoute() {
  const context = useContext(Context);
  const [isLog, setIsLog] = [context.isLog, context.setIsLog];
  console.log(isLog);
  return (
    <BrowserRouter>
      <div className="route-main">
        <div className="route-grid">
          {isLog.toString() == 'true' ? (
            <div className="route-row">
              <Sidebar></Sidebar>
              <Routes>
                <Route path="/" element={<Statistic />}></Route>
                <Route path="/order" element={<Order />}></Route>
                <Route path="/transaction" element={<Transaction />}></Route>
                <Route path="/management" element={<Manage />}></Route>
                <Route path="/customer" element={<Customer />}></Route>
                <Route path="/changepass" element={<ChangePass />}></Route>
              </Routes>
            </div>
          ) : (
            <Routes>
              <Route path="/" element={<Login />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/register" element={<Register />}></Route>
              <Route path="/changepass" element={<ChangePass />}></Route>
            </Routes>
          )}
        </div>
      </div>
    </BrowserRouter>
  );
}
