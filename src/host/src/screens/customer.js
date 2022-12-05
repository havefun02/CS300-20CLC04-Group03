import { useState } from 'react';
import './customer.css';
import ManageTask from '../components/manageTask';
import NavBar from '../components/nav_bar';
import Header from '../components/header';
import ManageBar from '../components/managebar';
export default function Customer() {
  const [property, setProperty] = useState({
    title: 'Customer',
    notify: '3',
    avar: ''
  });
  const [subRoute, setSubRoute] = useState([
    {
      state: true,
      title: 'Task',
      optional: 'button',
      component: ManageTask
    }
  ]);
  return (
    <div className="customer-main">
      <div className="customer-flex-box">
        <div className="customer-header">
          <Header props={property}></Header>
        </div>
        <div className="customer-content">
          <ManageBar props={subRoute} />
        </div>
      </div>
    </div>
  );
}
