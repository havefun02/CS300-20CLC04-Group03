import { useEffect, useState } from 'react';
import './customer.css';
import Header from '../components/header';
import shortid from 'shortid';
import axios from 'axios';
import Overlay from '../components/overlay';
const tabs = [
  {
    title: 'All customers',
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
const headerSize = [2, 4, 3, 3, 3, 3, 5, 9];
const header = [
  'Id',
  'Name',
  'Email',
  'Phone',
  'DoB',
  'Address',
  'Point',
  'Level'
];

const title = 'Customer';
export default function Customer() {
  const [list, setList] = useState([
    ['Id', 'Name', 'Email', 'Phone', 'DoB', 'Address', 'Point', 'Level'],
    ['Id', 'Name', 'Email', 'Phone', 'DoB', 'Address', 'Point', 'Level'],
    ['Id', 'Name', 'Email', 'Phone', 'DoB', 'Address', 'Point', 'Level'],
    ['Id', 'Name', 'Email', 'Phone', 'DoB', 'Address', 'Point', 'Level'],
    ['Id', 'Name', 'Email', 'Phone', 'DoB', 'Address', 'Point', 'Level'],
    ['Id', 'Name', 'Email', 'Phone', 'DoB', 'Address', 'Point', 'Level'],
    ['Id', 'Name', 'Email', 'Phone', 'DoB', 'Address', 'Point', 'Level'],
    ['Id', 'Name', 'Email', 'Phone', 'DoB', 'Address', 'Point', 'Level'],
    ['Id', 'Name', 'Email', 'Phone', 'DoB', 'Address', 'Point', 'Level'],
    ['Id', 'Name', 'Email', 'Phone', 'DoB', 'Address', 'Point', 'Level'],
    ['Id', 'Name', 'Email', 'Phone', 'DoB', 'Address', 'Point', 'Level'],
    ['Id', 'Name', 'Email', 'Phone', 'DoB', 'Address', 'Point', 'Level'],
    ['Id', 'Name', 'Email', 'Phone', 'DoB', 'Address', 'Point', 'Level'],
    ['Id', 'Name', 'Email', 'Phone', 'DoB', 'Address', 'Point', 'Level'],
    ['Id', 'Name', 'Email', 'Phone', 'DoB', 'Address', 'Point', 'Level']
  ]);
  const [listCode, setListCode] = useState([]);
  const [check, setCheck] = useState(Array(list.length).fill(false));
  const [checkAll, setCheckAll] = useState(false);
  const [send, setSendCode] = useState(false);
  const [overlay, setOverlay] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const url = 'http://localhost:3001/host/get-customer/all';
      const token = localStorage.getItem('token');
      const res = await axios.get(url);
      console.log(res);
    };
    fetchData();
  }, [fetch]);
  useEffect(() => {
    //call socket
    console.log('emit');
  }, [send]);
  const HeaderTable = () => {
    return (
      <div className="customer-table-header">
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
    );
  };

  const RowData = ({ props }) => {
    return (
      <div className="customer-row-data">
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
        <input
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
    <div className="customer-main">
      <div className="customer-flex-box">
        <div className="customer-header">
          <Header props={title}></Header>
        </div>
        <div className="customer-content">
          <div>
            <HeaderTable />
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
          <div className="customer-footer">
            <div>
              <div>
                <span>Total:{list.length}</span>
              </div>
              <div
                style={{
                  width: '80px',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <button
                  onClick={() => {
                    if (listCode.length === 0) {
                      setOverlay(true);
                    } else {
                      setSendCode((send) => !send);
                    }
                  }}
                  style={{
                    width: '100%',
                    height: '25px',
                    borderRadius: '5px',
                    backgroundColor: '#000',
                    color: '#fff',
                    cursor: 'pointer'
                  }}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
        {overlay && (
          <Overlay
            props={[
              [overlay, setOverlay],
              [listCode, setListCode]
            ]}
          />
        )}
      </div>
    </div>
  );
}
