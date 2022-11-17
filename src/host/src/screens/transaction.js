import { useState } from 'react';
import './transaction.css';
import Header from '../components/header';
import NavBar from '../components/nav_bar';
export default function Transaction() {
  const [property, setProperty] = useState({
    title: 'Transaction',
    notify: '3',
    avar: ''
  });
  const [subRoute, setSubRoute] = useState([
    {
      title: 'All Transactions',
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
    }
  ]);
  return (
    <div className="transaction-main">
      <div className="transaction-flex-box">
        <div className="transaction-header">
          <Header props={property}></Header>
        </div>
        <div className="transaction-content">
          <NavBar props={subRoute} />
        </div>
        <div className="transaction-footer"></div>
      </div>
    </div>
  );
}
