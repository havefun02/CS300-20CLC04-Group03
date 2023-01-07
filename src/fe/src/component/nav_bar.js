import { useState } from 'react';
import LoginOverlay from './loginOverlay';
import './nav_bar.css';
import shortid from 'shortid';
import { useContext } from 'react';
import { Context } from '../context/context';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
export default function Navbar({ props }) {
  const context = useContext(Context);
  const id_user = context.id;
  const navigate = useNavigate();
  const [trigger, setTrigger] = props;
  const [listCart, setListCart] = useState([]);
  const [search, setSearch] = useState(false);
  const [searchContent, setSearchContent] = useState('');
  const [overlay, setOverlay] = useState(false);
  const [listen, setListen] = useState(false);

  const [name, setName] = [context.name, context.setName];
  const toBase64 = (buffer) => {
    let binary = '';
    let bytes = new Uint8Array(buffer);
    let len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  };
  window.onbeforeunload = () => {
    return setListen((listen) => !listen);
  };
  useEffect(() => {
    const token = sessionStorage.getItem('token');
    const email = sessionStorage.getItem('email');

    const options = {
      headers: {
        Authorization: 'Basic ' + token + ':' + email
        // 'content-type': 'multipart/form-data'
      }
    };
    const fetch = async () => {
      const url = `http://localhost:3001/user/cart-list/${id_user}`;
      const res = await axios.get(url, options).then(
        (data) => {
          console.log(data);
          setListCart(data.data);
        },
        (rej) => {
          setListCart([]);
        }
      );
    };
    if (id_user !== null) fetch();
  }, [trigger, listen]);
  return (
    <div className="nav">
      <div className="nav-flex-box">
        <div className="nav-info-tools">
          <div
            onClick={() => {
              navigate('/newin');
              setTrigger((trigger) => !trigger);
            }}
            className="nav-info-search"
          >
            <h3>New In</h3>
          </div>
          <div
            onClick={() => {
              navigate('/women');
              setTrigger((trigger) => !trigger);
            }}
            className="nav-info-search"
          >
            <h3>Women</h3>
          </div>
          <div
            onClick={() => {
              navigate('/men');
              setTrigger((trigger) => !trigger);
            }}
            className="nav-info-search"
          >
            <h3>Men</h3>
          </div>
          <div
            onClick={() => {
              navigate('/sale');
              setTrigger((trigger) => !trigger);
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
                if (id_user !== null) navigate('/profile');
              }}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAADT0lEQVRoge3ZzY8URRzG8Y+7LsLoAXlH8CUxRm6GoIiJ0aBevOmBQIR438S7N/UkJirGiAFC4j8gSIKrJ/XkRYWYqBcUo67rG7InQXZM2PFQvabtrd5UdfdMMO43qWSmu+b5PVVTXfWrapZZ5v/NdR3pjGMndmMHtmEzbiruX8LPOIez+AifYr6j+I25FS9hBoPM8iMOYuvIXWM9jqGfaHap0scRrBuV+acw24HxarmIfcM0PoHjQzBeLUeLWEmkPsQ9nMDjifX/xAc4X8S4E48VOim8jz2FTmsmCsGU3pvHK1gd0VmNQ0WdFK0pGf/EUqQOm3nsT9A7kNGII23N708MNBB6PpXXMnT3NjW/Xvpsc1l82NRxszC+U7R/x9omDTiWGGCA0w30pzL038wV3ypvkXq5QQNezdDv47aYyFiN+DNYkWGmq5yqjhWYTK08Lj+3GfYQGmBafYf/iwcyhZs8xGukP8TlsrMqFGvR7gwjC/TwXEb957GqQZxHUiqdlN8zA2FxOpCg/7T0haxa3k5pwFcNxRcacUiY56uswestzA/wRVU0NnvMFsHacAUf4pvi+114VLNhU+aisMD+Q6wBfXlT6CjpY2X5QtK0dC0Ta8ClkbtI54/qhVgDfhmBkaYs8hZrwNcjMNKUc9UL10cqfYYnM4Xn8DE+wedCT/2K34r7G7EJt2A77seDuCEzzpmUSrukZ4gn8YT0vW6ZXvHbd/BXYsz7UoTHhEOnOpGrwl7h9gam67hD2LpeXSLuDzJmzYM1IjN4qEPjVR5Wnwm/mCMU29DMCmeew2abxVvZOWyJVa77S2bwVuVaT/tUIIWexc/UcfyUK7ROyD3KPXFemFGGxSZ8W4l5QYvcbJ/FY/FLbGjrNMIG8Ux4T1vhoxHR73BPW+ES2/F9JM7hLsTHcSoifgUvyF+Mykzg2UKrqj8lvtA2oof3IkEGwpidlLeY3Vj8pjreF8q7mXpJTAhnlXULzWVhyzcprOabhdx9ZfF5V3HvRFG3TuewDns+xl7huK/ptrCuXNDBA5vKWuG4b64D43N4Q/ttbCO2CGnHdKLZcpkW0oPoCptKV0eCY7hXOLfZgbsFY+XXrDPCXuOM8Jr1rGvgNesyy/zX+RvmMDyiA9hxNwAAAABJRU5ErkJggg=="
            ></img>

            {id_user !== null ? (
              <div className="hover-profile">
                <div
                  onClick={() => {
                    navigate('/profile');
                  }}
                >
                  <span>My account</span>
                </div>
                <div
                  onClick={() => {
                    navigate('/order');
                  }}
                >
                  <span>Order</span>
                </div>
                <div
                  onClick={() => {
                    setTrigger((trigger) => !trigger);
                    sessionStorage.clear();
                  }}
                >
                  <span>Log out</span>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div
            className="nav-shopping-cart"
            onClick={() => {
              navigate('/cart');
            }}
          >
            {id_user !== null ? <span>{listCart.length}</span> : <></>}
            <img
              id="cart"
              onClick={() => {
                setOverlay(true);
                if (id_user !== null) navigate('/cart');
              }}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAhElEQVRIie2V3QqAIAxGT9HDVa8dvYj2HNVFeZH5NzGI7IMhDtzZnDioQSOggc0yDQwlAK7gxlQJgAmW6r+oLZFBSI21j2Ykjft4BV0sA6FuN/B4BSmAGZgEfjFgxd18nz+opLctOf+KHvyAjwGWc/X9/zGDY354NXAMkVyAAvqMQmvWDjXkPzRJsutpAAAAAElFTkSuQmCC"
            ></img>

            {id_user !== null ? (
              <div className="hover-cart">
                {listCart.length === 0 && (
                  <div style={{ padding: '0 10px', height: '250px' }}>
                    <span>No product found</span>
                  </div>
                )}
                {listCart.length !== 0 && (
                  <div
                    className="item-container"
                    style={{
                      height: '250px',
                      minHeight: '250px',
                      position: 'relative',
                      overflow: 'auto',
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
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
                              flex: '0 0 30px',
                              display: 'flex',
                              alignItems: 'center'
                            }}
                          >
                            <img
                              src={`data:image/png;base64,${toBase64(
                                e.avar.data
                              )}`}
                            ></img>
                          </div>
                          <div style={{ flex: '3', padding: '3px 0' }}>
                            <span>{e.name}</span>
                          </div>
                          <div style={{ flex: '1', padding: '3px 0' }}>
                            <span
                              style={{
                                fontSize: '14px',
                                color: 'red'
                              }}
                            >
                              {e.price}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
                <div
                  style={{
                    padding: '0 8px',
                    height: '50px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <span>More...</span>
                  <button
                    className="button-cart"
                    style={{
                      height: '30px',
                      width: '80px',
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
              </div>
            ) : (
              <></>
            )}
          </div>
          {id_user !== null ? (
            <span
              style={{
                display: 'flex',
                textAlign: 'center',
                justifyContent: 'center',
                fontSize: '13px',
                width: '60px'
              }}
            >
              {name.length > 9 ? name.substr(name.lastIndexOf(' ')) : name}
            </span>
          ) : (
            <></>
          )}
        </div>
      </div>
      {overlay && id_user === null && (
        <LoginOverlay props={[overlay, setOverlay]} />
      )}
    </div>
  );
}
