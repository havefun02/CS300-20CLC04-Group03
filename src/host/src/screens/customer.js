import { useEffect, useState } from 'react';
import './customer.css';
import Header from '../components/header';
import shortid from 'shortid';
import axios from 'axios';
import MesOverlay from '../components/message';
import Overlay from '../components/overlay';
const headerSize = [2, 5, 4, 3, 3, 2, 2, 2];
const header = [
  'Id',
  'Email',
  'Name',
  'Phone',
  'Address',
  'Point',
  'Level',
  'Orders'
];

const title = 'Customer';
export default function Customer() {
  const [list, setList] = useState([]);
  const [check, setCheck] = useState(Array(list.length).fill(false));
  const [checkAll, setCheckAll] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const [mesOverlay, setMesOverlay] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');

      const options = {
        headers: {
          Authorization: 'Bearer ' + token
          // 'content-type': 'multipart/form-data'
        }
      };
      const url = 'http://localhost:3001/host/get-customer/all';
      const res = await axios.get(url, options).then((data) => {
        setList(data.data);
      });
    };
    fetchData();
  }, [fetch]);

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
                  width: '150px',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <button
                  onClick={() => {
                    if (check.filter((e, ind) => e === true).length !== 0) {
                      setOverlay((overlay) => !overlay);
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
                  Send Gift
                </button>
              </div>
              <div
                style={{
                  width: '150px',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <button
                  onClick={() => {
                    if (check.filter((e, ind) => e === true).length !== 0)
                      setMesOverlay((mesOverlay) => !mesOverlay);
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
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
        {mesOverlay && <MesOverlay props={[[mesOverlay, setMesOverlay]]} />}
        {overlay && <Overlay props={[[overlay, setOverlay]]} />}
      </div>
    </div>
  );
}
