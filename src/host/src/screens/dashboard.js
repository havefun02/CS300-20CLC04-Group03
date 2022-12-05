import { useState } from 'react';
import Header from '../components/header';
import NavBar from '../components/nav_bar';
import Table from '../components/table';
import './dashboard.css';
import Login from './login';
const optionDropdownCate = [];
const optionDropdownOrder = ['Inc', 'Dec'];
const optionDropdownBest = ['day', 'week', 'month'];

const tabs = [
  {
    title: 'In stock',
    optional: 'button',
    valueOpt: []
  }
];
const title = 'Dashboard';
export default function DashBoard() {
  return (
    <div className="dashboard-main">
      <div className="dashboard-flex-box">
        <div className="dashboard-header">
          <Header props={title}></Header>
        </div>
        <div className="dashboard-content">
          <NavBar props={tabs} />
        </div>
      </div>
    </div>
  );
}
