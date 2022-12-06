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
  const [fetch, setFetch] = useState(false);
  const [list, setList] = useState([
    ['0', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
  ]);
  useEffect(() => {
    const fetchData = () => {
      return;
    };
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
    const [updateState, setUpdateState] = useState(
      Array(props.length).fill(null)
    );
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
                      {!update ? (
                        <span style={{ color: 'red' }}>{e}</span>
                      ) : (
                        <input
                          style={{ width: '50%' }}
                          type="text"
                          placeholder={e}
                          onChange={(e) => {
                            updateState[index] = e.target.value;
                            console.log(updateState);
                            setUpdateState(updateState);
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
                      const url = 'http://localhost:3001/host/update-product';
                      const token = localStorage.getItem('token');
                      console.log(props.ele);
                      const formApi = { dataArr: updateState };
                      const res = await axios
                        .post(url, formApi, {
                          headers: {
                            // Authorization: `Basic ${token}`
                          }
                        })
                        .then((res) => {
                          console.log(res);
                        })
                        .catch((e) => {
                          throw e;
                        });
                      setFetch((fetch) => !fetch);
                    }}
                  >
                    Save
                  </button>
                ) : (
                  <button onClick={() => setUpdate((update) => !update)}>
                    Update
                  </button>
                )}
                <button onClick={() => setExpand((expand) => !expand)}>
                  Cancel
                </button>
                <button
                  onClick={async () => {
                    const url = 'http://localhost:3001/host/delete-product';
                    const token = localStorage.getItem('token');
                    console.log(props.ele);
                    const formApi = { dataArr: props.ele };
                    const res = await axios
                      .post(url, formApi, {
                        headers: {
                          // Authorization: `Basic ${token}`
                        }
                      })
                      .then((res) => {
                        console.log(res);
                      })
                      .catch((e) => {
                        throw e;
                      });
                    setFetch((fetch) => !fetch);
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
          <span>Total: 200</span>
          <span>Out of stock: 100</span>
        </div>
      </div>
    </div>
  );
}
