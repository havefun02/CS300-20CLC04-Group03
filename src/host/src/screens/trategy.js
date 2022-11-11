import { useState } from 'react';
import Header from '../components/header';
export default function Trategy() {
  const [property, setProperty] = useState();
  return (
    <div className="trategy-main">
      <div className="trategy-flex-box">
        <div className="trategy-header">
          <Header props={property}></Header>
        </div>
        <div className="trategy-content"></div>
        <div className="trategy-footer"></div>
      </div>
    </div>
  );
}
