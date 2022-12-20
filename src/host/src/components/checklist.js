import React, { useState } from 'react';
import shortid from 'shortid';
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

            <select>
              {color.map((e, ind) => {
                return <option key={shortid.generate()}>{e}</option>;
              })}
            </select>
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
