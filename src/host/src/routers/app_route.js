import Sidebar from '../components/side_bar';
import './approute.css';
export default function AppRoute() {
  return (
    <div className="route-main">
      <div className="route-grid">
        <div className="route-row">
          <Sidebar></Sidebar>
        </div>
      </div>
    </div>
  );
}
