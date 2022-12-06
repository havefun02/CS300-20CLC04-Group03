import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import shortid from 'shortid';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './nav_bar.css';
import Table from './table';

export default function NavBar({ props }) {
  const tabs = props;
  const [list, setList] = useState([
    ['1', '2', '3', '4', '5', '6', '7'],
    ['1', '2', '3', '4', '5', '6', '7'],
    ['1', '2', '3', '4', '5', '6', '7'],
    ['1', '2', '3', '4', '5', '6', '7'],
    ['1', '2', '3', '4', '5', '6', '7'],
    ['1', '2', '3', '4', '5', '6', '7'],
    ['1', '2', '3', '4', '5', '6', '7'],
    ['1', '2', '3', '4', '5', '6', '7'],
    ['1', '2', '3', '4', '5', '6', '7'],
    ['1', '2', '3', '4', '5', '6', '7'],
    ['1', '2', '3', '4', '5', '6', '7']
  ]); //replace this object by props
  const [headerSize, setHeaderSize] = useState([2, 4, 3, 3, 3, 5, 9]);

  const [header, setHeader] = useState([
    'Id',
    'Customer',
    'Status',
    'Date',
    'Price',
    'Brand',
    'Detail'
  ]); //replace this object by props
  return (
    <div className="nav_bar">
      <div className="nav_bar-flex-box">
        <div className="nav_bar-title">
          {tabs.map((items, index) => {
            let opacity = 1;
            let border = 'none';
            return (
              <div
                style={{ opacity: opacity }}
                className="nav_bar-title-item"
                key={shortid.generate()}
              >
                {items.optional === 'button' && (
                  <button className="option">
                    <span style={{ fontSize: '15px' }}>{items.title}</span>
                  </button>
                )}
                {items.optional === 'dropdown' && (
                  <Dropdown options={items.valueOpt} placeholder={items.title}>
                    {items.title}
                  </Dropdown>
                )}
              </div>
            );
          })}
          <div className="nav_bar-filter"></div>
        </div>

        <div className="nav_bar-content">
          <Table props={{ header: header, size: headerSize, list: list }} />
        </div>
      </div>
    </div>
  );
}
