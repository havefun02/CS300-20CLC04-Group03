import { useState } from 'react';
import './order.css';
import NavBar from '../components/nav_bar';
import Header from '../components/header';
import Table from '../components/table';
export default function Order() {
  const [property, setProperty] = useState({
    title: 'Order',
    notify: '3',
    avar: ''
  });
  const [subRoute, setSubRoute] = useState([
    {
      title: 'All orders',
      optional: 'button',
      valueOpt: []
    },
    {
      title: 'SortByDate',
      optional: 'dropdown',
      valueOpt: ['Inc', 'Dec']
    },
    {
      title: 'GroupById',
      optional: 'dropdown',
      valueOpt: ['Inc', 'Dec']
    },
    {
      title: 'State',
      optional: 'dropdown',
      valueOpt: ['Order', 'Cancel']
    }
  ]);
  return (
    <div className="order-main">
      <div className="order-flex-box">
        <div className="order-header">
          <Header props={property}></Header>
        </div>
        <div className="order-content">
          <NavBar props={subRoute} />
        </div>
        <div className="order-footer"></div>
      </div>
    </div>
  );
}
