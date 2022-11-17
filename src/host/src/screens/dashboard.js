import { useState } from 'react';
import Header from '../components/header';
import NavBar from '../components/nav_bar';
import Table from '../components/table';
import './dashboard.css';
import Login from './login';
const optionDropdownCate = [];
const optionDropdownOrder = ['Inc', 'Dec'];
const optionDropdownBest = ['day', 'week', 'month'];
export default function DashBoard() {
  const [property, setProperty] = useState({
    title: 'Dashboard',
    notify: '3',
    avar: ''
  });
  const [subRoute, setSubRoute] = useState([
    {
      title: 'All products',
      optional: 'button',
      valueOpt: []
    },
    {
      title: 'Category',
      optional: 'dropdown',
      valueOpt: optionDropdownCate
    },
    {
      title: 'OrderByPrice',
      optional: 'dropdown',
      valueOpt: optionDropdownOrder
    },
    {
      title: 'BestSeller',
      optional: 'dropdown',
      valueOpt: optionDropdownBest
    }
  ]);
  return (
    <div className="dashboard-main">
      <div className="dashboard-flex-box">
        <div className="dashboard-header">
          <Header props={property}></Header>
        </div>
        <div className="dashboard-content">
          <NavBar props={subRoute} />
        </div>
        <div className="dashboard-footer"></div>
      </div>
    </div>
  );
}
