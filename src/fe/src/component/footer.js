import './footer.css';
import data from '../assets/staticdata.json';
import shortid from 'shortid';
import { NavLink } from 'react-router-dom';
export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer_contact">
          <h2>Contact us </h2>
          <ul className="social-icon">
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=100015468727591"
                target="_blank"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/800px-Facebook_f_logo_%282021%29.svg.png"
                  alt=""
                ></img>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=100015468727591"
                target="_blank"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
                  alt=""
                ></img>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=100015468727591"
                target="_blank"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/124/124021.png"
                  alt=""
                ></img>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=100015468727591"
                target="_blank"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
                  alt=""
                ></img>
              </a>
            </li>
          </ul>
        </div>

        <div className="footer_navigate">
          <h2>Categories</h2>
          <ul>
            {data.cate.map((e, index) => {
              return (
                <li key={shortid.generate()}>
                  <NavLink to={e}>{e}</NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="footer_brand">
          <h2>Popular Brands</h2>
          <ul>
            {data.brands.map((e, index) => {
              return (
                <li key={shortid.generate()}>
                  <NavLink to={e}>{e}</NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <h4
        style={{
          width: '120px',
          position: 'absolute',
          bottom: '20px',
          fontWeight: 100,
          color: '#ddd',
          left: '50%',
          marginLeft: '-60px',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        power by @gr3
      </h4>
    </footer>
  );
}
