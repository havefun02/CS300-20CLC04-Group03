import { useState, useContext, useEffect } from 'react';
import './manage.css';
import Header from '../components/header';
import ManageBar from '../components/managebar';
import Login from './login';
import Table from '../components/table';
import AddForm from '../components/addproduct';
import ManageTable from '../components/manageTable';
const tabs = [
  {
    title: 'Add Product',
    optional: 'button',
    component: AddForm
  },
  {
    title: 'Manage Table',
    optional: 'button',
    component: ManageTable
  }
];
const title = 'Management';
export default function Manage() {
  return (
    <div className="manage-main">
      <div className="manage-flex-box">
        <div className="manage-header">
          <Header props={title}></Header>
        </div>
        <div className="manage-content">
          <ManageBar props={tabs} />
        </div>
        <div className="manage-footer"></div>
      </div>
    </div>
  );
}
