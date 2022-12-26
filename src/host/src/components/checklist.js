import React, { useState } from 'react';
import shortid from 'shortid';
import './checklist.css';

export default function CheckList({ props }) {
  // State with list of all checked items
  const [render, setRender] = useState(false);
  const [coloring, setColor] = [props.color, props.setColor];
  const [quantity, setQuantity] = [props.quantity, props.setQuantity];
  const [check, setCheck] = useState(Array(props.sizeList.length).fill(false));
  const size = props.sizeList;
  const color = props.colorList;
  return (
    <div className="CheckList-component" key={render}>
      {size.map((items, ind) => {
        return (
          <div key={shortid.generate()} className="checklist-elements">
            <div className="checklist-elements-children">
              <input
                id={ind}
                type="checkbox"
                checked={check[ind]}
                onChange={(e) => {
                  if (!e.target.checked) {
                    check[ind] = false;
                    setRender((render) => !render);
                  } else {
                    check[ind] = true;
                  }
                  setCheck(Object.assign([], check));
                }}
              ></input>
              <label htmlFor="checkbox"> {items}</label>
            </div>

            <select
              value={coloring[ind]}
              onChange={(e) => {
                coloring[ind] = e.target.value;
                setColor(Object.assign([], coloring));
              }}
              disabled={check[ind] === false}
            >
              {color.map((e, ind) => {
                return <option key={shortid.generate()}>{e}</option>;
              })}
            </select>
            <input
              type="text"
              value={quantity[ind]}
              disabled={check[ind] === false}
              onChange={(e) => {
                quantity[ind] = e.target.value;
                setQuantity(Object.assign([], quantity));
              }}
            ></input>
          </div>
        );
      })}
    </div>
  );
}
