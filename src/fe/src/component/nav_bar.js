import { useState } from 'react';
import LoginOverlay from './loginOverlay';
import './nav_bar.css';
import shortid from 'shortid';
import { useContext } from 'react';
import { Context } from '../context/context';
import { useNavigate } from 'react-router-dom';
export default function Navbar({ props }) {
  const context = useContext(Context);
  const navigate = useNavigate();
  const [listCart, setListCart] = useState(['1', 2, 3, 4, 5]);
  const [search, setSearch] = useState(false);
  const [searchContent, setSearchContent] = useState('');
  const [overlay, setOverlay] = useState(false);
  const [isLog, setIsLog] = [context.isLog, context.setIsLog];
  const [name, setName] = [context.name, context.setName];
  return (
    <div className="nav">
      <div className="nav-flex-box">
        <div className="nav-info-tools">
          <div
            onClick={() => {
              navigate('/newin');
            }}
            className="nav-info-search"
          >
            <h3>New In</h3>
          </div>
          <div
            onClick={() => {
              navigate('/women');
            }}
            className="nav-info-search"
          >
            <h3>Women</h3>
          </div>
          <div
            onClick={() => {
              navigate('/men');
            }}
            className="nav-info-search"
          >
            <h3>Men</h3>
          </div>
          <div
            onClick={() => {
              navigate('/sale');
            }}
            className="nav-info-search"
          >
            <h3>Sale</h3>
          </div>
        </div>
        <div className="nav-shopping-tools">
          <div className="nav-shopping-search">
            <input
              onChange={(e) => {
                setSearchContent(e.target.value);
              }}
              type="text"
              placeholder="Search"
            ></input>
            <img
              onClick={() => setSearch(true)}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABD0lEQVRIie2UPW7CQBCFP5IS0gEnoQdyAxAHSQoUUSD+Gm4DIiegoITkAOEMJIQWTDFvwY3xrqFAUZ402rX95r2xvTPwV1EGRsAHsFOsgCFQula8BWyBKCF+gOY14gcJTYAqkFfUgKme7YFGqHg5Vnn7Au9NnG+gGGIw4lx5GmbiDkIMPpVU9eDWxV2FGPwqqeDBfRJ3m0Z8iO2jgGJyvsS4wVprxSPPcb5CDN61vngYvGqdeXBPKGFNFGFHMQkdcTZk6Oom1kSRqqtjP70APGNv6Tq6Gyru0MCaKGlUbCTurvtZTIpYEy2x47vTfsD5s8RNM5mkwY0MF+N/k7sy6bmbjzc0WGAzak7gGL9vHAG+Ol6n6x8u5AAAAABJRU5ErkJggg=="
            />
          </div>

          <div className="nav-shopping-profile">
            <img
              onClick={() => {
                setOverlay((overlay) => !overlay);
              }}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAADT0lEQVRoge3ZzY8URRzG8Y+7LsLoAXlH8CUxRm6GoIiJ0aBevOmBQIR438S7N/UkJirGiAFC4j8gSIKrJ/XkRYWYqBcUo67rG7InQXZM2PFQvabtrd5UdfdMMO43qWSmu+b5PVVTXfWrapZZ5v/NdR3pjGMndmMHtmEzbiruX8LPOIez+AifYr6j+I25FS9hBoPM8iMOYuvIXWM9jqGfaHap0scRrBuV+acw24HxarmIfcM0PoHjQzBeLUeLWEmkPsQ9nMDjifX/xAc4X8S4E48VOim8jz2FTmsmCsGU3pvHK1gd0VmNQ0WdFK0pGf/EUqQOm3nsT9A7kNGII23N708MNBB6PpXXMnT3NjW/Xvpsc1l82NRxszC+U7R/x9omDTiWGGCA0w30pzL038wV3ypvkXq5QQNezdDv47aYyFiN+DNYkWGmq5yqjhWYTK08Lj+3GfYQGmBafYf/iwcyhZs8xGukP8TlsrMqFGvR7gwjC/TwXEb957GqQZxHUiqdlN8zA2FxOpCg/7T0haxa3k5pwFcNxRcacUiY56uswestzA/wRVU0NnvMFsHacAUf4pvi+114VLNhU+aisMD+Q6wBfXlT6CjpY2X5QtK0dC0Ta8ClkbtI54/qhVgDfhmBkaYs8hZrwNcjMNKUc9UL10cqfYYnM4Xn8DE+wedCT/2K34r7G7EJt2A77seDuCEzzpmUSrukZ4gn8YT0vW6ZXvHbd/BXYsz7UoTHhEOnOpGrwl7h9gam67hD2LpeXSLuDzJmzYM1IjN4qEPjVR5Wnwm/mCMU29DMCmeew2abxVvZOWyJVa77S2bwVuVaT/tUIIWexc/UcfyUK7ROyD3KPXFemFGGxSZ8W4l5QYvcbJ/FY/FLbGjrNMIG8Ux4T1vhoxHR73BPW+ES2/F9JM7hLsTHcSoifgUvyF+Mykzg2UKrqj8lvtA2oof3IkEGwpidlLeY3Vj8pjreF8q7mXpJTAhnlXULzWVhyzcprOabhdx9ZfF5V3HvRFG3TuewDns+xl7huK/ptrCuXNDBA5vKWuG4b64D43N4Q/ttbCO2CGnHdKLZcpkW0oPoCptKV0eCY7hXOLfZgbsFY+XXrDPCXuOM8Jr1rGvgNesyy/zX+RvmMDyiA9hxNwAAAABJRU5ErkJggg=="
            ></img>

            {isLog == 'true' && (
              <div className="hover-profile">
                <div
                  onClick={() => {
                    navigate('/profile');
                  }}
                >
                  <span>My account</span>
                </div>
                <div onClick={() => {}}>
                  <span>Order</span>
                </div>
                <div
                  onClick={() => {
                    setIsLog(false);
                    localStorage.clear();
                  }}
                >
                  <span>Log out</span>
                </div>
              </div>
            )}
          </div>
          <div
            className="nav-shopping-cart"
            onClick={() => {
              navigate('/cart');
            }}
          >
            <span>5</span>
            <img
              id="cart"
              onClick={() => {
                setOverlay((overlay) => !overlay);
                if (isLog === false) navigate('/cart');
              }}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAhElEQVRIie2V3QqAIAxGT9HDVa8dvYj2HNVFeZH5NzGI7IMhDtzZnDioQSOggc0yDQwlAK7gxlQJgAmW6r+oLZFBSI21j2Ykjft4BV0sA6FuN/B4BSmAGZgEfjFgxd18nz+opLctOf+KHvyAjwGWc/X9/zGDY354NXAMkVyAAvqMQmvWDjXkPzRJsutpAAAAAElFTkSuQmCC"
            ></img>

            {isLog == 'true' && (
              <div className="hover-cart">
                {listCart.length === 0 && (
                  <div>
                    <span>No product found</span>
                  </div>
                )}
                {listCart.length !== 0 && (
                  <>
                    {listCart.map((e) => {
                      return (
                        <div
                          key={shortid.generate()}
                          onClick={() => {
                            navigate('/cart');
                          }}
                        >
                          <div
                            style={{
                              flex: '1',
                              display: 'flex',
                              alignItems: 'center'
                            }}
                          >
                            avar
                          </div>
                          <div style={{ flex: '3', padding: '3px 0' }}>
                            <span>name</span>
                          </div>
                          <div style={{ flex: '1', padding: '3px 0' }}>
                            <span
                              style={{
                                fontSize: '14px',
                                color: 'red'
                              }}
                            >
                              price
                            </span>
                          </div>
                        </div>
                      );
                    })}
                    <div>
                      <span>More...</span>
                      <button
                        style={{
                          height: '30px',
                          width: '80px',
                          position: 'absolute',
                          right: '10%',
                          border: 'none',
                          backgroundColor: '#000',
                          color: '#fff',
                          cursor: 'pointer'
                        }}
                        onClick={() => {
                          navigate('/cart');
                        }}
                      >
                        To cart
                      </button>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
          {isLog == 'true' && (
            <span
              style={{
                display: 'flex',
                textAlign: 'center',
                justifyContent: 'center',
                fontSize: '13px',
                width: '60px'
              }}
            >
              {name}
            </span>
          )}
        </div>
      </div>
      {overlay && isLog !== 'true' && (
        <LoginOverlay props={[overlay, setOverlay]} />
      )}
    </div>
  );
}
