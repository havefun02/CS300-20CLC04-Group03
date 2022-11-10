import { useState } from 'react';
import Header from '../components/header';
import './dashboard.css';
export default function DashBoard() {
  const [property, setProperty] = useState({
    title: 'Dashboard',
    optional: 'Total product',
    notify: '3',
    number: 3,
    avar: ''
  });
  return (
    <div className="dashboard-main">
      <div className="dashboard-flex-box">
        <div className="dashboard-header">
          <Header props={property}></Header>
        </div>
        <div className="dashboard-content"></div>
        <div className="dashboard-footer"></div>
      </div>
    </div>
  );
}
