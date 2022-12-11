import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import shortid from 'shortid';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './nav_bar.css';
import axios from 'axios';
import Table from './table';
const headerSizeOrder = [2, 4, 3, 3, 3, 5, 9];
const headerOrder = [
  'Id',
  'Email',
  'Date',
  'State',
  'Quantity',
  'Brands',
  'Total pay',
  'Gift',
  'Detail'
];

const headerSizeTrans = [2, 4, 3, 3, 3, 3, 5, 3, 9];
const headerTrans = [
  'Id',
  'Email',
  'Rate',
  'Date',
  'Quantity',
  'Total pay',
  'Brands',
  'Gift',
  'Detail'
];

export default function NavBar({ props }) {
  const tabs = props.tabs;
  const [date, setDate] = useState();
  const [list, setList] = [props.list, props.setList];

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
                  <Dropdown
                    onChange={(e) => {
                      setDate(e.value);
                    }}
                    options={items.valueOpt}
                    placeholder={items.title}
                  >
                    {items.title}
                  </Dropdown>
                )}
              </div>
            );
          })}
          <div className="nav_bar-filter"></div>
        </div>

        <div className="nav_bar-content">
          {props.title == 'Transaction' && (
            <Table
              props={{
                type: 'trans',
                headerSize: headerSizeTrans,
                header: headerTrans,
                list: list,
                setList: setList
              }}
            />
          )}
          {props.title == 'Order' && (
            <Table
              props={{
                type: 'order',
                headerSize: headerSizeOrder,
                header: headerOrder,
                list: list,
                setList: setList
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
