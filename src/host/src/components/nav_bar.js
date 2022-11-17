import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import shortid from 'shortid';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './nav_bar.css';
import Table from './table';

export default function NavBar({ props }) {
  const [routers, setRoutes] = useState(props); //replace this object by props
  const [list, setList] = useState([
    ['id', 'id1', 'id2'],
    ['id', 'id1', 'id2'],
    ['id', 'id1', 'id2'],
    ['id', 'id1', 'id2'],
    ['id', 'id1', 'id2'],
    ['id', 'id1', 'id2'],
    ['id', 'id1', 'id2'],
    ['id', 'id1', 'id2'],
    ['id', 'id1', 'id2'],
    ['id', 'id1', 'id2'],
    ['id', 'id1', 'id2'],
    ['id', 'id1', 'id2'],
    ['id', 'id1', 'id2']
  ]); //replace this object by props
  const [header, setHeader] = useState(['id', 'id1', 'id2']); //replace this object by props
  return (
    <div className="nav_bar">
      <div className="nav_bar-flex-box">
        <div className="nav_bar-title">
          {routers.map((items) => {
            let opacity = 1;
            let border = 'none';
            return (
              <div
                style={{ opacity: opacity }}
                className="nav_bar-title-item"
                key={shortid.generate()}
              >
                {items.optional === 'button' && (
                  <button className="option" style={{ borderBottom: border }}>
                    {items.title}
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
          <Table props={{ header: header, list: list }} />
        </div>

        <div className="nav_bar-footer">
          <h5>dev by</h5>
        </div>
      </div>
    </div>
  );
}
