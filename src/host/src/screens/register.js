import { useState } from 'react';
import Header from '../components/header';
export default function Register() {
  const [property, setProperty] = useState();
  return (
    <div className="dashboard-main">
      <div className="dashboard-flex-box">
        <div className="dashboard-header">
          <Header props={property}></Header>
        </div>
        <div className="dashboard-content"></div>
        <div className='random'></div>
        <div className="dashboard-footer"></div>
      </div>
    </div>
  );
}
