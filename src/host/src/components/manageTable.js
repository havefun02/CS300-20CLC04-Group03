import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import shortid from 'shortid';
import './manageTable.css';
const headerSize = [3, 4, 6, 3, 5, 4, 5, 3, 4, 3];
const header = [
  'No.',
  'Code',
  'Name',
  'Status',
  'Price',
  'Brand',
  'Category',
  'Size',
  'Color',
  'Quantity'
];
export default function ManageTable({ props }) {
  const [sortPay, setSortPay] = useState('desc');
  const [sortEmail, setSortEmail] = useState('desc');
  const [sortDate, setSortDate] = useState('desc');
  const [fetch, setFetch] = useState(false);
  const [list, setList] = useState([]);

  useEffect(() => {
    const url = 'http://localhost:3001/host/get-product/all';
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      const options = {
        headers: {
          Authorization: 'Bearer ' + token
          // 'content-type': 'multipart/form-data'
        }
      };
      const res = await axios.get(url, options).then((res) => {
        console.log(res.data);
        let data = [];
        res.data.forEach((e, ind) => {
          let tmp = [ind, ...e];
          data.push(tmp);
        });
        console.log(res.data);
        setList(data);
      });
    };
    fetchData();
  }, [fetch]);

  const HeaderTable = ({ props }) => {
    return (
      <div className="header-table">
        {props.header.map((ele) => {
          return (
            <div
              key={shortid.generate()}
              style={{ flex: props.headerSize[props.header.indexOf(ele)] }}
            >
              <span>{ele}</span>
            </div>
          );
        })}
      </div>
    );
  };

  const RowData = ({ props }) => {
    const [expand, setExpand] = useState(false);
    const [update, setUpdate] = useState(false);

    return (
      <>
        <div className="row-data">
          {props.ele.map((e, index) => {
            return (
              <div
                key={shortid.generate()}
                style={{ flex: props.headerSize[index] }}
              >
                <span>{e}</span>
              </div>
            );
          })}
          {!expand ? (
            <img
              onClick={() => {
                setExpand((expand) => !expand);
              }}
              className="expand-row"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAb0lEQVRIie2PsQ2AMAwELyyWcVIyCqSCaQmNI1kIRwEF0fjq998bHMf5lQDEjlyU7OPyDBzA3MglyeyWZGocFzlaDEkCNqu4hwCsIrp+UpcXGuvfSoaVa0lWklqeR5RrSf1k2HJL8km5lnxW7jj3nAwCHOMFhaBLAAAAAElFTkSuQmCC"
            />
          ) : (
            <img
              onClick={() => {
                setExpand((expand) => !expand);
              }}
              className="expand-row"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAbElEQVRIie2Q0QnAIAwFr4uIdIP+dP8JdIIinaT9iSClSEIV+pGDgCh5Hg8cx/kdUWYKATiAE1hnhV8yQz+JQJHg8jh/rqs1r9Zvd8PCNW8qFiDTr6KtLsuOiU0We3YBSMBuDa9orMzmjmPjBhOHH8tY0fZoAAAAAElFTkSuQmCC"
            ></img>
          )}
        </div>
        {expand && (
          <div className="manage-table-expand-row">
            <div className="manage-table-expand">
              <div className="manage-table-content-group">
                {props.ele.map((e, index) => {
                  return (
                    <div
                      key={shortid.generate()}
                      style={{
                        flex: props.headerSize[index],
                        alignItems: 'center',
                        textAlign: 'center'
                      }}
                    >
                      {!update || index == 0 || index == 1 || index == 3 ? (
                        <span style={{ color: 'red' }}>{e}</span>
                      ) : (
                        <input
                          style={{ width: '50%' }}
                          type="text"
                          id={index}
                          onChange={(e) => {
                            // if (index == 2) {
                            //   setUpdateName(e.target.value);
                            // } else if (index == 9) {
                            //   setUpdateQuantity(e.target.value);
                            // }
                          }}
                        ></input>
                      )}
                    </div>
                  );
                })}
              </div>
              <div className="manage-table-bt-group">
                {update ? (
                  <button
                    onClick={async () => {
                      const token = localStorage.getItem('token');

                      const options = {
                        headers: {
                          Authorization: 'Bearer ' + token
                          // 'content-type': 'multipart/form-data'
                        }
                      };
                      const url = `http://localhost:3001/host/update-product${props.ele[1]}/${props.ele[7]}/${props.ele[8]}`;
                      let name = document.getElementById('2').value;
                      let quantity = document.getElementById('9').value;
                      let price = document.getElementById('4').value;
                      let brand = document.getElementById('5').value;
                      let cate = document.getElementById('6').value;
                      let size = document.getElementById('7').value;
                      let color = document.getElementById('8').value;

                      const formApi = {
                        name: name,
                        quantity: quantity,
                        price: price,
                        cate: cate,
                        brand: brand,
                        color: color,
                        size: size
                      };
                      const res = await axios
                        .post(url, formApi, options)
                        .then((res) => {
                          setFetch((fetch) => !fetch);
                        })
                        .catch((e) => {
                          throw e;
                        });
                      setUpdate(false);
                    }}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setUpdate(true);
                    }}
                  >
                    Update
                  </button>
                )}
                <button
                  onClick={() => {
                    setUpdate(false);
                    setExpand((expand) => !expand);
                  }}
                >
                  Cancel
                </button>
                <button
                  onClick={async () => {
                    const token = localStorage.getItem('token');
                    const options = {
                      headers: {
                        Authorization: 'Bearer ' + token
                        // 'content-type': 'multipart/form-data'
                      }
                    };
                    const url = `http://localhost:3001/host/delete-product${props.ele[1]}/${props.ele[7]}/${props.ele[8]}`;
                    const res = await axios
                      .delete(url, options)
                      .then((res) => {
                        setFetch((fetch) => !fetch);
                      })
                      .catch((e) => {
                        throw e;
                      });
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    );
  };
  return (
    <div className="manage-table">
      <div className="manage-table-flex-box">
        <HeaderTable
          props={{ headerSize: headerSize, header: header }}
        ></HeaderTable>
        <div className="manage-table-row">
          {list.map((ele) => {
            return (
              <RowData
                key={shortid.generate()}
                props={{ headerSize, ele }}
              ></RowData>
            );
          })}
        </div>
        <div className="manage-table-footer">
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '300px',
              justifyContent: 'space-between'
            }}
          >
            <div style={{ position: 'relative', fontWeight: '700' }}>
              <span className="filter-span">Filter</span>
              <div className="display-filter">
                <div
                  onClick={() => {
                    if (sortPay === 'desc') return setSortPay('asc');
                    else setSortPay('desc');
                  }}
                  style={{ display: 'flex', alignItems: 'center' }}
                >
                  SortByPay
                </div>
                <div
                  onClick={() => {
                    if (sortDate === 'desc') return setSortDate('asc');
                    else setSortDate('desc');
                  }}
                >
                  SortByDate
                </div>
                <div
                  onClick={() => {
                    if (sortEmail === 'desc') return setSortEmail('asc');
                    else setSortEmail('desc');
                  }}
                >
                  SortByEmail
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
