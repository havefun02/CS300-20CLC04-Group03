import { useState, useEffect } from 'react';
import './order.css';
import NavBar from '../components/nav_bar';
import Header from '../components/header';
import Table from '../components/table';
import axios from 'axios';
const title = 'Order';
const tabs = [
  {
    title: 'All orders',
    optional: 'button',
    valueOpt: []
  }
];
export default function Order() {
  const [list, setList] = useState([]);
  const [fetch, useFetch] = useState(false);
  //replace this object by
  useEffect(() => {
    const fetchData = async () => {
      const url = 'http://localhost:3001/host/get-order/all';
      const token = localStorage.getItem('token');
      const res = await axios.get(url);
      console.log(res);
    };
  }, [fetch]);
  return (
    <div className="order-main">
      <div className="order-flex-box">
        <div className="order-header">
          <Header props={title}></Header>
        </div>
        <div className="order-content">
          <NavBar
            props={{ title: title, tabs: tabs, list: list, setList: setList }}
          />
        </div>
        <div className="order-footer"></div>
      </div>
    </div>
  );
}
