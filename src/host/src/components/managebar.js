import { tab } from '@testing-library/user-event/dist/tab';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import shortid from 'shortid';
import './managebar.css';

export default function ManageBar({ props }) {
  const tabs = props;
  const [stateTab, setStateTabs] = useState(
    Array(tabs.length).fill(false).fill(true, 0, 1)
  );
  //replace this object by props
  const [reRender, setReRender] = useState(false);

  return (
    <div className="manage_bar">
      <div className="manage_bar-flex-box">
        <div className="manage_bar-title">
          {tabs.map((items) => {
            let opacity = 0.5;
            let border = 'none';
            if (stateTab[tabs.indexOf(items)] === true) {
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
                    let clone = Array(tabs.length).fill(false);
                    clone[tabs.indexOf(items)] = true;
                    setStateTabs(clone);
                  }}
                >
                  <span style={{ fontSize: '15px' }}>{items.title}</span>
                </button>
              </div>
            );
          })}
          <div className="manage_bar-filter"></div>
        </div>
        {tabs.map((items) => {
          if (stateTab[tabs.indexOf(items)] === true)
            return (
              <div className="manage_bar-content" key={shortid.generate()}>
                <items.component
                  key={reRender}
                  props={{
                    reRender: reRender,
                    setReRender: setReRender
                  }}
                />
              </div>
            );
        })}
      </div>
    </div>
  );
}
