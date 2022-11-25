import { useState } from 'react';
import './trategy.css';
import ManageTask from '../components/manageTask';
import NavBar from '../components/nav_bar';
import Header from '../components/header';
import ManageBar from '../components/managebar';
export default function Trategy() {
  const [property, setProperty] = useState({
    title: 'Trategy',
    notify: '3',
    avar: ''
  });
  const [subRoute, setSubRoute] = useState([
    {
      state: true,
      title: 'Task',
      optional: 'button',
      component: ManageTask
    }
  ]);
  return (
    <div className="trategy-main">
      <div className="trategy-flex-box">
        <div className="trategy-header">
          <Header props={property}></Header>
        </div>
        <div className="trategy-content">
          <ManageBar props={subRoute} />
        </div>
      </div>
    </div>
  );
}
