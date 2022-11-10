import { useState } from 'react';
import Header from '../components/header';
export default function Order() {
  const [property, setProperty] = useState();
  return (
    <div className="order-main">
      <div className="order-flex-box">
        <div className="order-header">
          <Header props={property}></Header>
        </div>
        <div className="order-content"></div>
        <div className="order-footer"></div>
      </div>
    </div>
  );
}
