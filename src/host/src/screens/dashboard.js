import { useState } from 'react';
import Header from '../components/header';
import NavBar from '../components/nav_bar';
import Table from '../components/table';
import './dashboard.css';
import Login from './login';
export default function DashBoard() {
  const [property, setProperty] = useState({
    title: 'Dashboard',
    optional: 'Total product',
    notify: '3',
    number: 3,
    avar: ''
  });
  const [subRoute, setSubRoute] = useState([
    { title: 'All products', state: true, component: Table },
    { title: 'All products1', state: false, component: Login }
  ]);
  return (
    <div className="dashboard-main">
            <p>hello</p>
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
