import { useState } from 'react';
import shortid from 'shortid';
import './manageTable.css';
export default function ManageTable({ props }) {
  const [header, setHeader] = useState(props.header);
  const [list, setList] = useState(props.list);
  const HeaderTable = ({ props }) => {
    return (
      <div className="header">
        {props.map((ele) => {
          return (
            <div
              key={shortid.generate()}
              style={{ flex: props.length, textAlign: 'center' }}
            >
              <h3>{ele}</h3>
            </div>
          );
        })}
      </div>
    );
  };

  const RowData = ({ props }) => {
    const [isDbClick, setDbClick] = useState(false);
    const handleDbClick = () => {
      setDbClick((isDbClick) => !isDbClick);
    };

    return (
      <>
        <div className="row-data" onDoubleClick={handleDbClick}>
          {props.map((ele) => {
            return (
              <div
                key={shortid.generate()}
                style={{ flex: props.length, textAlign: 'center' }}
              >
                <h3>{ele}</h3>
              </div>
            );
          })}
        </div>
        {isDbClick && (
          <div className="manage-table-expand-row">
            <div className="expand">
              {!isDbClick && <span>Expand</span>}
              {isDbClick && <span>Collapse</span>}
            </div>
            <div className="manage-table-expand">
              <div className="manage-table-content-group">
                {props.map((ele) => {
                  return (
                    <div
                      key={shortid.generate()}
                      style={{ flex: props.length, textAlign: 'center' }}
                    >
                      <h3>{ele}</h3>
                    </div>
                  );
                })}
              </div>
              <div className="manage-table-bt-group">
                <button onClick={() => setDbClick((isDbClick) => !isDbClick)}>
                  Save
                </button>
                <button onClick={() => setDbClick((isDbClick) => !isDbClick)}>
                  Cancel
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
        <HeaderTable props={header}></HeaderTable>
        <div className="manage-table-row">
          {list.map((ele) => {
            return <RowData key={shortid.generate()} props={ele}></RowData>;
          })}
        </div>
      </div>
    </div>
  );
}
