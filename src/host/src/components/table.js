import { useState } from 'react';
import shortid from 'shortid';
import './table.css';
export default function Table({ props }) {
  const [header, setHeader] = useState(props.header);
  const [list, setList] = useState(props.list);

  return (
    <table className="table">
      <thead>
        <tr>
          {header.map((item) => {
            return <th key={shortid.generate()}>{item}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {list.map((items) => {
          return (
            <tr key={shortid.generate()}>
              {items.map((item) => {
                return <td key={shortid.generate()}>{item}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
