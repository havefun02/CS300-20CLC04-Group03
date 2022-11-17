import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import shortid from 'shortid';
import './managebar.css';
export default function ManageBar({ props }) {
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
  const handleClick = (id) => {
    routers.map((item) => {
      if (item.title === id) {
        item.state = true;
      } else {
        item.state = false;
      }
    });
    const newItems = Object.assign([], routers);
    return setRoutes(newItems);
  };
  return (
    <div className="manage_bar">
      <div className="manage_bar-flex-box">
        <div className="manage_bar-title">
          {routers.map((items) => {
            let opacity = 0.5;
            let border = 'none';
            if (items.state === true) {
              opacity = 1;
              border = '2px solid blue';
            }
            return (
              <div
                style={{ opacity: opacity }}
                className="manage_bar-title-item"
                key={shortid.generate()}
              >
                <button
                  onClick={() => {
                    handleClick(items.title);
                  }}
                  style={{ borderBottom: border }}
                >
                  {items.title}
                </button>
              </div>
            );
          })}
          <div className="manage_bar-filter"></div>
        </div>
        {routers.map((items) => {
          if (items.state === true)
            return (
              <div className="manage_bar-content" key={shortid.generate()}>
                <items.component props={{ header: header, list: list }} />
              </div>
            );
        })}
        <div className="manage_bar-footer">
          <h5>dev by</h5>
        </div>
      </div>
    </div>
  );
}
