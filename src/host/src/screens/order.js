import { useEffect, useState } from 'react';
import './order.css';
import Header from '../components/header';
import axios from 'axios';
import shortid from 'shortid';

const headerSize = [1, 4, 3, 3, 3, 3, 3, 9];
const header = [
  'No.',
  'Email',
  'Address',
  'Date',
  'Total pay',
  'Gift Apply',
  'State',
  'Detail'
];

const title = 'Order';
export default function Order() {
  const [sortPay, setSortPay] = useState('desc');
  const [sortEmail, setSortEmail] = useState('desc');
  const [sortDate, setSortDate] = useState('desc');
  const [list, setList] = useState([]);
  const [fetch, useFetch] = useState(false);
  //replace this object by
  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      const options = {
        headers: {
          Authorization: 'Bearer ' + token
          // 'content-type': 'multipart/form-data'
        }
      };
      const url = 'http://localhost:3001/host/get-order/all';
      const res = await axios.get(url, options).then((data) => {
        setList(data.data);

        console.log(data);
      });
    };
    fetchData();
  }, [fetch]);
  const HeaderTable = () => {
    return (
      <div className="order-table-header">
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
      <div className="order-row-data">
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
                justifyContent: 'center',
                overflowY: 'auto',
                position: 'relative'
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
    <div className="order-main">
      <div className="order-flex-box">
        <div className="order-header">
          <Header props={title}></Header>
        </div>
        <div className="order-content">
          <div>
            <HeaderTable props={{}} />
            <div>
              {list.map((e, ind) => {
                return <RowData props={{ e }}></RowData>;
              })}
            </div>
          </div>
          <div className="order-footer">
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
