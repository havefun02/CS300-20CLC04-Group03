import { useEffect, useState } from 'react';
import './customer.css';
import ManageTask from '../components/manageTask';
import NavBar from '../components/nav_bar';
import Header from '../components/header';
import ManageBar from '../components/managebar';

const tabs = [
  {
    title: 'All customer',
    optional: 'button',
    component: ManageTask
  }
];
const title = 'Customer';
export default function Customer() {
  return (
    <div className="customer-main">
      <div className="customer-flex-box">
        <div className="customer-header">
          <Header props={title}></Header>
        </div>
        <div className="customer-content">
          <ManageBar props={tabs} />
        </div>
      </div>
    </div>
  );
}
