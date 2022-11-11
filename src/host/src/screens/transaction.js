import { useState } from 'react';
import Header from '../components/header';
export default function Transaction() {
  const [property, setProperty] = useState();
  return (
    <div className="transaction-main">
      <div className="transaction-flex-box">
        <div className="transaction-header">
          <Header props={property}></Header>
        </div>
        <div className="transaction-content"></div>
        <div className="transaction-footer"></div>
      </div>
    </div>
  );
}
