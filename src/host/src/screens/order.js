import { useState } from 'react';
import './order.css';
import NavBar from '../components/nav_bar';
import Header from '../components/header';
import Table from '../components/table';
const title = 'Order';
const tabs = [
  {
    title: 'All orders',
    optional: 'button',
    valueOpt: []
  }
];
export default function Order() {
  return (
    <div className="order-main">
      <div className="order-flex-box">
        <div className="order-header">
          <Header props={title}></Header>
        </div>
        <div className="order-content">
          <NavBar props={tabs} />
        </div>
        <div className="order-footer"></div>
      </div>
    </div>
  );
}
