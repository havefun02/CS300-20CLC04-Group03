import { useEffect, useState } from 'react';
import './transaction.css';
import Header from '../components/header';
import axios from 'axios';
import shortid from 'shortid';
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
const headerSize = [2, 4, 3, 3, 3, 3, 5, 3, 9];
const header = [
  'Id',
  'Email',
  'Rate',
  'Date',
  'Quantity',
  'Total pay',
  'Brands',
  'Gift',
  'Detail'
];

const title = 'Transaction';
export default function Transaction() {
  const [list, setList] = useState([
    [
      'Id',
      'Email',
      'Rate',
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
      'Rate',
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
      'Rate',
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
      'Rate',
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
      'Rate',
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
      'Rate',
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
      'Rate',
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
      'Rate',
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
      'Rate',
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
      'Rate',
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
      'Rate',
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
      'Rate',
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
      'Rate',
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
      'Rate',
      'Date',
      'Quantity',
      'Total pay',
      'Brands',
      'Gift',
      'Detail'
    ]
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
    return (
      <div className="trans-row-data">
        {props.e.map((el, ind) => {
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
            <HeaderTable props={{}} />
            <div>
              {list.map((e, ind) => {
                return <RowData props={{ e }}></RowData>;
              })}
            </div>
          </div>
          <div className="transaction-footer">
            <span>Total:{list.length}</span>
            <span>Revenue:500</span>
          </div>
        </div>
      </div>
    </div>
  );
}
