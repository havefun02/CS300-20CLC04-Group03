import { useEffect, useState } from 'react';
import shortid from 'shortid';
import './table.css';
export default function Table({ props }) {
  const [header, setHeader] = useState(props.header);
  const [headerSize, setHeaderSize] = useState(props.size);
  const [list, setList] = useState(props.list);
  const HeaderTable = ({ props }) => {
    return (
      <div className="table-header">
        {props.header.map((ele) => {
          return (
            <div
              key={shortid.generate()}
              style={{
                flex: props.headerSize[props.header.indexOf(ele)],
                textAlign: 'center'
              }}
            >
              <span>{ele}</span>
            </div>
          );
        })}
      </div>
    );
  };

  const RowData = ({ props }) => {
    return (
      <>
        <div className="row-data">
          {props.ele.map((e) => {
            return (
              <div
                key={shortid.generate()}
                style={{
                  flex: props.headerSize[props.ele.indexOf(e)],
                  textAlign: 'center'
                }}
              >
                <span>{e}</span>
              </div>
            );
          })}
        </div>
      </>
    );
  };
  return (
    <div className="table-table">
      <div className="table-table-flex-box">
        <HeaderTable props={{ header, headerSize }}></HeaderTable>
        <div className="table-table-row">
          {list.map((ele) => {
            return (
              <RowData
                key={shortid.generate()}
                props={{ headerSize, ele }}
              ></RowData>
            );
          })}
        </div>
        <div className="table-footer">
          <span>Total: 200</span>
          <span>Out of stock: 100</span>
        </div>
      </div>
    </div>
  );
}
