import { useEffect, useState } from 'react';
import shortid from 'shortid';
import './table.css';
export default function Table({ props }) {
  const [header, setHeader] = useState(props.header);
  const [list, setList] = useState(props.list);
  const HeaderTable = ({ props }) => {
    return (
      <div className="header">
        {props.map((ele) => {
          return (
            <div
              key={shortid.generate()}
              style={{
                flex: 'auto',
                textAlign: 'center'
              }}
            >
              <h3>{ele}</h3>
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
          {props.map((ele) => {
            return (
              <div
                key={shortid.generate()}
                style={{ flex: 'auto', textAlign: 'center' }}
              >
                <h3>{ele}</h3>
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
        <HeaderTable props={header}></HeaderTable>
        <div className="table-table-row">
          {list.map((ele) => {
            return <RowData key={shortid.generate()} props={ele}></RowData>;
          })}
        </div>
      </div>
      <div className="table-footer">
        <span>total</span>
      </div>
    </div>
  );
}
