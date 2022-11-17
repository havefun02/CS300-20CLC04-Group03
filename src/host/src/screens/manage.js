import { useState } from 'react';
import './manage.css';
import Header from '../components/header';
import ManageBar from '../components/managebar';
import Login from './login';
import Table from '../components/table';
import AddForm from '../components/addproduct';
import ManageTable from '../components/manageTable';
export default function Manage() {
  const [property, setProperty] = useState({
    title: 'Management',
    notify: '3',
    avar: ''
  });
  const [subRoute, setSubRoute] = useState([
    {
      state: true,
      title: 'Add Product',
      optional: 'button',
      component: AddForm
    },

    {
      state: false,
      title: 'Manage Table',
      optional: 'button',
      component: ManageTable
    }
  ]);
  return (
    <div className="manage-main">
      <div className="manage-flex-box">
        <div className="manage-header">
          <Header props={property}></Header>
        </div>
        <div className="manage-content">
          <ManageBar props={subRoute} />
        </div>
        <div className="manage-footer"></div>
      </div>
    </div>
  );
}
