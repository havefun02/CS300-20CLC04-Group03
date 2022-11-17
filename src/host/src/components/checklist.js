import React, { useState } from 'react';
import Dropdown from 'react-dropdown';
import './checklist.css';

export default function CheckList({ props }) {
  // State with list of all checked item
  const [checked, setChecked] = useState([]);
  const checkList = props[0];
  const color = props[1];

  // Add/Remove checked item from list
  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
  };

  // Generate string of checked items
  const checkedItems = checked.length
    ? checked.reduce((total, item) => {
        return total + ', ' + item;
      })
    : '';

  // Return classes based on whether item is checked
  var isChecked = (item) =>
    checked.includes(item) ? 'checked-item' : 'not-checked-item';

  return (
    <div className="CheckList-component">
      {checkList.map((item, index) => (
        <div key={index} className="checklist-elements">
          <div className="checklist-elements-children">
            <input id="checkbox" type="checkbox" onChange={handleCheck}></input>
            <label htmlFor="checkbox"> {item}</label>
          </div>

          <Dropdown options={color} placeholder="color"></Dropdown>
          <input
            type="text"
            onChange={handleCheck}
            placeholder="Quantity"
          ></input>
        </div>
      ))}
    </div>
  );
}
