import { useEffect, useState } from 'react';
import './transaction.css';
import Header from '../components/header';
import NavBar from '../components/nav_bar';
import axios from 'axios';
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
  const [list, setList] = useState([]);
  const [fetch, useFetch] = useState(false);
  //replace this object by
  useEffect(() => {
    const fetchData = async () => {
      const url = 'http://localhost:3001/host/get-transaction/all';
      const token = localStorage.getItem('token');
      const res = await axios.get(url);
      console.log(res);
    };
  }, [fetch]);
  return (
    <div className="transaction-main">
      <div className="transaction-flex-box">
        <div className="transaction-header">
          <Header props={title}></Header>
        </div>
        <div className="transaction-content">
          <NavBar
            props={{ title: title, tabs: tabs, list: list, setList: setList }}
          />
        </div>
        <div className="transaction-footer"></div>
      </div>
    </div>
  );
}
