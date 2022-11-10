import { useState } from 'react';
import Header from '../components/header';
export default function Manage() {
  const [property, setProperty] = useState();
  return (
    <div className="manage-main">
      <div className="manage-flex-box">
        <div className="manage-header">
          <Header props={property}></Header>
        </div>
        <div className="manage-content"></div>
        <div className="manage-footer"></div>
      </div>
    </div>
  );
}
