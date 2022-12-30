import { useEffect, useState } from 'react';
import './transaction.css';
import Header from '../components/header';
import axios from 'axios';
import shortid from 'shortid';

const headerSize = [2, 4, 3, 3, 3, 5, 3, 9];
const header = [
  'Id',
  'Email',
  'Date',
  'Quantity',
  'Total pay',
  'Brands',
  'Gift',
  'Detail'
];

const title = 'Transaction';
export default function Transaction() {
  const [sortPay, setSortPay] = useState('desc');
  const [sortEmail, setSortEmail] = useState('desc');
  const [sortDate, setSortDate] = useState('desc');
  const [list, setList] = useState([
    [
      'Id',
      'Email',
      'Date',
      'Quantity',
      'Total pay',
      'Brands',
      'Gift',
      'Detail'
    ],
    [
      'Id',
      'Email',
      'Date',
      'Quantity',
      'Total pay',
      'Brands',
      'Gift',
      'Detail'
    ],
    ['Id', 'Email', 'Date', 'Quantity', 'Total pay', 'Brands', 'Gift', 'Detail']
  ]);
  const [fetch, useFetch] = useState(false);
  //replace this object by
  useEffect(() => {
    const fetchData = async () => {
      const url = 'http://localhost:3001/host/get-transaction/all';
      const token = localStorage.getItem('token');
      const res = await axios.get(url);
      console.log(res);
    };
    fetchData();
  }, [fetch]);
  
  const HeaderTable = () => {
    return (
      <div className="trans-table-header">
        <div>
          {header.map((ele, ind) => {
            return (
              <div
                key={shortid.generate()}
                style={{
                  flex: headerSize[ind],
                  textAlign: 'center'
                }}
              >
                <span>{ele}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const RowData = ({ props }) => {
    console.log(props);
    return (
      <div className="trans-row-data">
        {props.map((el, ind) => {
          return (
            <div
              key={shortid.generate()}
              style={{
                flex: headerSize[ind],
                textAlign: 'center',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'center'
              }}
            >
              <span>{el}</span>
            </div>
          );
        })}
      </div>
    );
  };
  return (
    <div className="transaction-main">
      <div className="transaction-flex-box">
        <div className="transaction-header">
          <Header props={title}></Header>
        </div>
        <div className="transaction-content">
          <div>
            <HeaderTable />
            <div>
              {list.map((e, ind) => {
                return <RowData key={shortid.generate()} props={e}></RowData>;
              })}
            </div>
          </div>
          <div className="transaction-footer">
            <div style={{ position: 'relative' }}>
              <span>Filter</span>
              <div className="display-filter">
                <div
                  onClick={() => {
                    if (sortPay === 'desc') return setSortPay('asc');
                    else setSortPay('desc');
                  }}
                  className="display-filter-e"
                >
                  <span>SortByPay </span>
                </div>
                <div
                  onClick={() => {
                    if (sortDate === 'desc') return setSortDate('asc');
                    else setSortDate('desc');
                  }}
                  className="display-filter-e"
                >
                  <span>SortByDate</span>
                </div>
                <div
                  onClick={() => {
                    if (sortEmail === 'desc') return setSortEmail('asc');
                    else setSortEmail('desc');
                  }}
                  className="display-filter-e"
                >
                  <span>SortByEmail</span>
                </div>
              </div>
            </div>
            <span>Total:{list.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
