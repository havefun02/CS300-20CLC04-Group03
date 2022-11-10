import { useState } from 'react';
import Header from '../components/header';
export default function Statistic() {
  const [property, setProperty] = useState();
  return (
    <div className="statistic-main">
      <div className="statistic-flex-box">
        <div className="statistic-header">
          <Header props={property}></Header>
        </div>
        <div className="statistic-content"></div>
        <div className="statistic-footer"></div>
      </div>
    </div>
  );
}
