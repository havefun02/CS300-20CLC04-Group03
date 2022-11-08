import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from '../components/side_bar';
import './approute.css';
import DashBoard from '../screens/dashboard';
import Order from '../screens/order';
import Transaction from '../screens/transaction';
import Manage from '../screens/manage';
import Trategy from '../screens/trategy';
import Login from '../screens/login';
import Register from '../screens/register';
import ChangePass from '../screens/changepass';
import React from 'react';
export default function AppRoute({ props }) {
  const [isLog, setIsLog] = props;
  return (
    <BrowserRouter>
      <div className="route-main">
        <div className="route-grid">
          <div className="route-row">
            {isLog ? (
              <>
                <Sidebar></Sidebar>
                <Routes>
                  <Route path="/" element={<DashBoard />}></Route>
                  <Route path="/order" element={<Order />}></Route>
                  <Route path="/transaction" element={<Transaction />}></Route>
                  <Route path="/manage" element={<Manage />}></Route>
                  <Route path="/trategy" element={<Trategy />}></Route>
                </Routes>
              </>
            ) : (
              <Routes>
                <Route
                  path="/"
                  element={<Login props={{ isLog, setIsLog }} />}
                ></Route>
                <Route
                  path="/register"
                  element={<Register props={{ isLog, setIsLog }} />}
                ></Route>
                <Route
                  path="/changepass"
                  element={<ChangePass props={{ isLog, setIsLog }} />}
                ></Route>
              </Routes>
            )}
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
