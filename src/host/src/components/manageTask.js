import { useEffect, useState } from 'react';
import shortid from 'shortid';
import './manageTask.css';
export default function ManageTask({ props }) {
  const headerSize = [2, 4, 5, 5, 5, 3];
  const header = ['Id', 'Name', 'Phone', 'Email', 'Address', 'Point'];
  const [list, setList] = useState([
    ['0', '2', '3', '4', '5', '6'],
    ['1', '2', '3', '4', '5', '6'],
    ['1', '2', '3', '4', '5', '6'],
    ['1', '2', '3', '4', '5', '6'],
    ['1', '2', '3', '4', '5', '6'],
    ['1', '2', '3', '4', '5', '6'],
    ['1', '2', '3', '4', '5', '6'],
    ['1', '2', '3', '4', '5', '6'],
    ['1', '2', '3', '4', '5', '6'],
    ['1', '2', '3', '4', '5', '6'],
    ['1', '2', '3', '4', '5', '6']
  ]);
  const [checked, setChecked] = useState(Array(list.length));
  const [checkedAll, setCheckedAll] = useState(false);
  useEffect(() => {
    console.log(checked);
  }, [checked]);
  const HeaderTable = ({ props }) => {
    return (
      <div className="managetask-header">
        {props.map((ele, index) => {
          return (
            <div
              key={shortid.generate()}
              style={{
                flex: headerSize[index],
                textAlign: 'center'
              }}
            >
              <h3>{ele}</h3>
            </div>
          );
        })}
        <div className="select">
          <input
            id="checkall"
            type="checkbox"
            checked={checkedAll}
            onChange={() => {
              if (checkedAll === true) {
                let t = checked.fill(false);
                setChecked(t);
              } else {
                let t = checked.fill(true);
                setChecked(t);
              }
              setCheckedAll((checkedAll) => !checkedAll);
            }}
          ></input>
          <label htmlFor="checkall"></label>
        </div>
      </div>
    );
  };

  const RowData = ({ props }) => {
    return (
      <>
        <div className="row-data">
          {props.map((ele, index) => {
            return (
              <div
                key={shortid.generate()}
                style={{ flex: headerSize[index], textAlign: 'center' }}
              >
                <h3>{ele}</h3>
              </div>
            );
          })}
          <div className="select">
            <input
              id={props[0]}
              type="checkbox"
              checked={checked[list.indexOf(props)]}
              onChange={(e) => {
                let clone = checked;
                checked[list.indexOf(props)] = !checked[list.indexOf(props)];
                let t = Object.assign([], checked);
                console.log(t);
                setChecked(t);
              }}
            ></input>
            <label htmlFor={props[0]}></label>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className=" manageTask-table">
      <div className=" manageTask-table-flex-box">
        <HeaderTable props={header}></HeaderTable>
        <div className=" manageTask-table-row">
          {list.map((ele) => {
            return <RowData key={shortid.generate()} props={ele}></RowData>;
          })}
        </div>
        <div className=" manageTask-footer">
          <span>total</span>
        </div>
      </div>
    </div>
  );
}
