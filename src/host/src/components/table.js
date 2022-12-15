import { useEffect, useState } from 'react';
import shortid from 'shortid';
import './table.css';
export default function Table({ props }) {
  const header = props.header;
  const headerSize = props.headerSize;
  const [list, setList] = [props.list, props.setList];
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
          <span>Total:{list.length}</span>
          <span>Revenue:500</span>
        </div>
      </div>
    </div>
  );
}
