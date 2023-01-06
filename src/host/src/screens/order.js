import { useEffect, useState } from 'react';
import './order.css';
import Header from '../components/header';
import axios from 'axios';
import shortid from 'shortid';

const headerSize = [1, 4, 3, 3, 2, 3, 2, 8];
const header = [
  'Id',
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
  const [sort, setSort] = useState();
  const [list, setList] = useState([]);
  const [defaultState, setDefault] = useState([]);
  const [fetch, setFetch] = useState(false);

  const [check, setCheck] = useState(Array(list.length).fill(false));
  const [checkAll, setCheckAll] = useState(false);
  //replace this object by

  let handleConfirm = async () => {
    const token = localStorage.getItem('token');
    const options = {
      headers: {
        Authorization: 'Bearer ' + token
        // 'content-type': 'multipart/form-data'
      }
    };
    let id_orders = [];
    check.forEach((e, ind) => {
      if (e === true) {
        id_orders.push(list[ind]);
      }
    });
    const url = 'http://localhost:3001/host/confirm-order';
    const res = await axios
      .post(url, { list_id_order: id_orders }, options)
      .then((data) => {
        setFetch((fetch) => !fetch);
        setCheck(Array(list.length).fill(false));
        console.log(data);
      });
  };

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
        setDefault(data.data);
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
          <input
            checked={checkAll}
            onChange={(e) => {
              if (e.target.checked) {
                setCheck(Array(list.length).fill(true));
                setCheckAll(true);
              } else {
                setCheck(Array(list.length).fill(false));
                setCheckAll(false);
              }
            }}
            style={{ right: '15px' }}
            type="checkbox"
          ></input>
        </div>
      </div>
    );
  };

  const RowData = ({ props }) => {
    return (
      <div className="order-row-data">
        {props.e.map((el, ind) => {
          if (el === null) el = '';
          return (
            <div
              className="order-ele"
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
              {ind === 1 ? (
                <span>{el.length > 10 ? el.substr(0, 16) + '...' : el}</span>
              ) : (
                <span>
                  {el.length > 4 && ind === 0 ? el.substr(0, 2) + '...' : el}
                </span>
              )}
            </div>
          );
        })}
        <input
          disabled={props.state === 'completed'}
          checked={check[props.ind]}
          onChange={(e) => {
            if (e.target.checked) {
              check[props.ind] = true;
              setCheck(Object.assign([], check));
            } else {
              check[props.ind] = false;
              setCheck(Object.assign([], check));
            }
          }}
          type="checkbox"
        ></input>
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
                return (
                  <RowData
                    key={shortid.generate()}
                    props={{ e, ind }}
                  ></RowData>
                );
              })}
            </div>
          </div>
          <div className="order-footer">
            <div
              style={{
                width: '300px',
                padding: '0 30px',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <span>Total:{list.length}</span>

              <button
                onClick={() => {
                  if (check.filter((e) => e === true).length > 0) {
                    handleConfirm();
                  }
                }}
                style={{
                  height: '25px',
                  width: '80px',
                  backgroundColor: '#000',
                  color: '#fff',
                  cursor: 'pointer'
                }}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
