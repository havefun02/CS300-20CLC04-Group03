import React, { useState } from 'react';
import Dropdown from 'react-dropdown';
import { redirect } from 'react-router-dom';
import './checklist.css';

export default function CheckList({ props }) {
  // State with list of all checked items
  const [render, setRender] = useState(false);
  const [property, setProperty] = [props.property, props.setProperty];
  const size = props.size;
  const color = props.color;

  return (
    <div className="CheckList-component" key={render}>
      {size.map((items) => {
        return (
          <div key={items} className="checklist-elements">
            <div className="checklist-elements-children">
              <input
                id="checkbox"
                type="checkbox"
                onChange={(e) => {
                  if (!e.target.checked) {
                    property[size.indexOf(items)] = null;
                    setRender((render) => !render);
                  } else
                    property[size.indexOf(items)] = {
                      size: items.substr(0, 2)
                    };
                  let t1 = Object.assign([], property);
                  setProperty(t1);
                }}
              ></input>
              <label htmlFor="checkbox"> {items}</label>
            </div>

            <Dropdown
              disabled={property[size.indexOf(items)] === null}
              onChange={(e) => {
                let clone = property;
                clone[size.indexOf(items)].color = e.value;
                let t = Object.assign([], clone);
                setProperty(t);
              }}
              options={color}
              placeholder="Color"
            ></Dropdown>
            <input
              type="text"
              disabled={property[size.indexOf(items)] === null}
              onChange={(e) => {
                let clone = property;
                clone[size.indexOf(items)].quantity = e.target.value;
                let t = Object.assign([], clone);
                setProperty(t);
              }}
              placeholder="0"
            ></input>
          </div>
        );
      })}
    </div>
  );
}
