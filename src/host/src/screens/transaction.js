import { useState } from 'react';
import './transaction.css';
import Header from '../components/header';
import NavBar from '../components/nav_bar';
const tabs = [
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
];
const title = 'Transaction';
export default function Transaction() {
  return (
    <div className="transaction-main">
      <div className="transaction-flex-box">
        <div className="transaction-header">
          <Header props={title}></Header>
        </div>
        <div className="transaction-content">
          <NavBar props={tabs} />
        </div>
        <div className="transaction-footer"></div>
      </div>
    </div>
  );
}
