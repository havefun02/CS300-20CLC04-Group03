import { useEffect, useState } from 'react';
import shortid from 'shortid';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../context/context';
import axios from 'axios';
import './order.css';
export default function Order() {
  const navigate = useNavigate();
  const context = useContext(Context);
  const id_user = context.id;
  const [fetch, setFetch] = [context.trigger, context.setTrigger];

  const [list, setList] = useState([]);
  const [tab, setTab] = useState([1, 0, 0, 0]);
  const handleRemoveOrder = async (id_order) => {
    const token = sessionStorage.getItem('token');
    const email = sessionStorage.getItem('email');

    const options = {
      headers: {
        Authorization: 'Basic ' + token + ':' + email
        // 'content-type': 'multipart/form-data'
      }
    };
    const url = `http://localhost:3001/user/del-order/${id_user}/${id_order}`;
    const res = await axios.get(url, options).then((data) => {
      setFetch((fetch) => !fetch);
    });
  };
  const handleBuyAgain = async (id_order) => {
    const token = sessionStorage.getItem('token');
    const email = sessionStorage.getItem('email');

    const options = {
      headers: {
        Authorization: 'Basic ' + token + ':' + email
        // 'content-type': 'multipart/form-data'
      }
    };
    const url = `http://localhost:3001/user/buy-again-order/${id_user}/${id_order}`;
    const res = await axios.get(url, options).then((data) => {
      setFetch((fetch) => !fetch);
    });
  };
  const toBase64 = (buffer) => {
    let binary = '';
    let bytes = new Uint8Array(buffer);
    let len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
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

    const fetchOrder = async () => {
      const url = `http://localhost:3001/user/order-list/${id_user}/${tab.indexOf(
        1
      )}`;
      const res = await axios.get(url, options).then((data) => {
        console.log(data.data);
        setList(data.data);
      });
    };
    fetchOrder();
  }, [fetch]);
  const AOrder = ({ props }) => {
    return (
      <div className="order-product" key={shortid.generate()}>
        <div className="order-product-state">
          <div>
            {props.e.state === 'completed' && (
              <>
                <div>
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAC+klEQVRoge3YT2gdVRTH8c+kD5t08VRQMaUrBTcKpguFWqlgxYUr3UhD/LOoWhDpooU2EYu3NZIuFEoWCoquggndWIQKCiIuLOnGLiyprlwYtNTSUgUbbdpxMfNsasb3JvOmmTyYLwxvZu6Z85vzzj33z1BTU1NTU1OcSBCvsuZ5zGjaZ4/LZTltlOVoBdyB1/wuxu6ynEZlOcpN8CS+wG+Cu8py21eWo9wEX6Znd5bptlFajYQKsruE1c/ITaJR9T9ZFtUEcb07n8XdHazP4RsEwdz/GXU3jxTNZjHNPzEiOJbVWHWNDAuiG44W16/vxWfYgBnBtixH1XatrIxmtR21zpyP8QJ+xZDg3NLHqs5IPp51FTvxLQYx7ah1S01WPo9UNcoFi8YNW3QKjztjHyZazb2RkRZv+FnkRcRihwSPtpp6o0aW27yLPZjHZsH53spIi0GjOIlNeIe8NbLWZv9drnjLsKtO43nBkd7MCBzwE96X1Pmra3GtNY9Ngh2CmbaWfT51zV48VsUOsRMf4U1MC6bbWl779+yeRq5RYnUZT393Soo5D421l5FgESE98tjH9NqE2IY6kLVGvhoJ+kV2iY3g/vTuaZEpt/vAbn+V9kYFtTpnJNiIWbEjeEiywdmAh8UmXTDrbYMlBVFYq30gk9bjczyIOZGnDWga0MQz+AFDrjguuKWrILrUat+1LnoldXxGv0eMurSk9ZjDvrZgFpvxEt4rHEiXWn34BRyydZnz2DCIjP3HccKoSyKvp1cjhYMoqhXsSK/nI8EERtuKDGja74/MtqBJhnBRimkdbEjWNSQb+40rFu4XWVjxU8VYrjUvWZuNNwR/Yyw9biQ4gS0u20729yQLtqdnJ4SM7pmXLrU6Db+fpL8TDrs1Q/w2rQ8AkancL30TtNqveJNh7iSG8KPImNhXaesTqeP78B22pNktRpdanZfuySR1PBXI4hSeEpwtFEBJWvn2IJPWu+BlPIcH0rvfi0yJfdhVJqrUqqmp6T3+ASm/79siWC4FAAAAAElFTkSuQmCC" />
                  <span style={{ color: 'green' }}>Successful delivery</span>
                </div>
                <div>
                  <span style={{ color: 'red' }}>Completed</span>
                </div>
              </>
            )}
            {props.e.state === 'cancel' && (
              <>
                <div>
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAErklEQVR4nO1bS28cRRAupdpjSIALDyHESyjCxhJRpN2qtSMkBxAng5Dgkn8ClyREBE5IgJGAvxAFiV8QCJiX4iRAfOCCAjE45EZiZ7d6c0ij6ukxu5vdZHZ31jMTTUkjrdrT1V3fVH1VXTMGqKQSLw4WjSAds4bXrWFX8mtdkN5RmyCtSGy8u8uuo6kBsOHJCzZeST3pVh1+4VHnZ6VHbQg6Lu3YokUCYCQdtgKAKw+wVQhwxQGwk8RTJD6yFQdwxQG24gCuOAAyIJ4tWHgkGdPfgnRWkFfTjpeWBAV5NT5P8JoaEhvJa4nuYcZVV+kA2Oo2YG2c351eURoAVDZh/8OCdKHj6f52HejRYcdhTMkNgA5PWO0f9+nHSwtAEaQCwFQe4KoQMBUHuMmRRsGl4gBTcYCrOMBUHOAmRxo7JA727WnvahwS5I8t0o/W0IYYviqGb+ibH4u0YpE+schLDmq77xoOkOn5vRbpczF0Le27QDG0JcgfNOHAY6UFwEFttyAfF8M2NopvauPEGjos2Dhoo/qMeoVeNqrN+jHDRwTp3P9AxHNLB0AL6k8I0q/bhhs+YSN6Nu18BUcMndS5iT0tWHiqFAC0p2i/NXzZ7wP59xumxqPqahqet0gXY5tooz01/3yhAWj6mKW/YuNpJYuewDWgB62hU8GuywKNpwsJgPMxH7u9NfSVg9pUdrrnIot8OnSafnawd7pwAAjy8cTt9allrX8Tag8l4SBI7w8NgEX+Pm0aUvcdNtUpYytp9Yv5pHVukb+BMaRlaCGQqh0YCnYgALQyBADfDrMxzfOB8U/cocN8BsYUMfRF8LTPChECDvbt0SLHp6yeVNfbXs+CFLVmCMXSpoPF+3IHoL2rcSjE5dlJG5+IIJ+PvaD+Ru4AiNb2MfMf7h7Xqm+0z+LE8HVr6GuL9df6ramfzQ0MAzsKCQ5Jet169WDjP8s72O/12riXIL3XB/SXAgA/ZEOCOBzpda9HG15HhvEfCqq3xHA77O/VrjWj+kzwuiv5h4CJT3kODtzf+7dxeUBBSAqrznFdKzksFQAAbg8CYNw0mByHlfEHANDMHQBr6M9+IdAHhDNKbFkAkKRCXTv3StAGbhHkF4cxLpVuQ28HQ091jgvSy9mSoBmdFH0bK553BDKSW0mQl/p9ES9IH+YfAshLYTPnUt6f3hNjz3q3V4cg/VKYQsjpMVh7eL4Urs/c6f40nqj6fA+g58n7+RHPBQK8qmV47gCoaAMzbPwkTFjE0JchLJYn9g8To8RschzWNhZMSFqm8UIAWmS6/gzctk42OV1IF7V5kbXx8Wd3ccpVEhx4o4NFE0C4lB8IfFrbWFkZry2wjnR73sH8vVBEaQI/bpH+CCB8l8UR2LfC9GQYg/uPttyhyGL9QYWuJOGgbazxYj5Umob+TtUWL4LoU7JIP4V0ddO3saLabNr5muq22T6O+QstqD0JZRIHc5EWMXpg6ShqtJNz1J/no9qstrT0slHjOS1vldy2i5wYvLaO3bYNXnRpel7gT8Xwv6mrPy2EkJcHproyioPFeyw23hSkj5Qg9Q2SghLq/XVfIiMvW+TXHfADee+3EiiZ/AeDa1Rj55Cy1AAAAABJRU5ErkJggg==" />
                  <span style={{ color: '#F80436' }}>Returned</span>
                </div>
                <div>
                  <span style={{ color: 'red' }}>Canceled</span>
                </div>
              </>
            )}
            {props.e.state === 'shipping' && (
              <>
                <div>
                  <img src="data:image/png;base64,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" />
                  <span style={{ color: '#B5B407' }}>Delivery</span>
                </div>
                <div>
                  <span style={{ color: 'red' }}>Waiting</span>
                </div>
              </>
            )}
          </div>
        </div>
        {props.e.detail.map((e, ind) => {
          return (
            <div className="order-product-item" key={shortid.generate()}>
              <div>
                <div className="order-product-img">
                  <img
                    onClick={() => navigate('/product:id')}
                    src={`data:image/png;base64,${toBase64(e.avar.data)}`}
                  ></img>
                </div>
                <div>
                  <div style={{ fontWeight: '300', paddingBottom: '10px' }}>
                    <span>{e.name}</span>
                  </div>
                  <div style={{ fontWeight: '100' }}>
                    <span>{e.detail}</span>
                  </div>
                </div>
              </div>
              <div>
                <span style={{ color: 'red', fontSize: '15px' }}>
                  {e.price}
                </span>
              </div>
            </div>
          );
        })}
        <div className="order-product-sum">
          <div>
            <span>
              Order Total:
              <span
                style={{ color: 'red', paddingLeft: '10px', fontSize: '19px' }}
              >
                {props.e.sum}
              </span>
            </span>
          </div>
          <div>
            {props.e.state === 'completed' || props.e.state === 'cancel' ? (
              <button
                onClick={() => handleBuyAgain(props.e.id_order)}
                style={{
                  width: '100px',
                  height: '30px',
                  backgroundColor: '#000',
                  color: '#fff',
                  fontWeight: '700'
                }}
              >
                Buy Again
              </button>
            ) : (
              <button
                onClick={() => handleRemoveOrder(props.e.id_order)}
                style={{
                  width: '100px',
                  height: '30px',
                  backgroundColor: '#000',
                  color: '#fff',
                  fontWeight: '700'
                }}
              >
                Cancel
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="order">
      <div className="order-container">
        <div className="order-flex-box">
          <div className="order-header">
            <div>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABwklEQVRoge2XvUoDQRDHf4mBNGIl2ug7pLOzk9SCD+A7WJg3sFBSCFrZWNkFhWBnKYjgY5hUQhTBiMZY3ITbXM7N3eU+xmP/MCw7M/vx39md3QUHXahYbOPcZhEPoXOu5j2LrFCL4GOLWp6w7pDSRMQR0QZHRBtKQyRK+v0LWV2YidK9iwh6LkqgRBFxRLTBEdEGR0QbHBFtKA2RNB+NFYstDtyjMSlsK5f7g9JFpABYo1yaiCxCZBwQmy1M1sX3MaK/TR40RCSNv7+1j7CVzhJxx5vy1xCRVOCIZICBlGtS9pg91D2xbUr5GqXjeXt20aw1kS1pcyP1C6nvAyPDbyQ6gBPR3Woi0pY2DeBTdMd4F2ATeBJpit8h8AN84S/CQkSywC7wIeNeAXXDVgcuxTYE9qJ2WgQR8Fb5Wca+M/TXonsBtoONNB32CYb4C7hs6N+TdlhERHaANxm3C6wYtiXglH+wtRr40WjjTTwMB3iH/Rulh70r451H8D0iQfrNWiYYSH3V0NWAMxHz77QhvrEuxLyIBOtVoGPoO0wnp6Ky6lwEJ9ZilnTL4q8GwYn1mSXSt/gXjjR+iPcaLsQ0VrX6CymA9PbC3ipeAAAAAElFTkSuQmCC" />
              <span>Your Order</span>
            </div>
          </div>
          <div className="order-title">
            <div
              onClick={() => {
                let clone = Array(4).fill(0);
                clone[0] = 1;
                setTab(clone);
                setFetch((fetch) => !fetch);
              }}
              className={
                tab[0] === 1
                  ? 'order-title-element  add-border'
                  : 'order-title-element'
              }
            >
              <div>
                <span>All</span>
              </div>
            </div>

            <div
              onClick={() => {
                let clone = Array(4).fill(0);
                clone[1] = 1;
                setTab(clone);
                setFetch((fetch) => !fetch);
              }}
              className={
                tab[1] == 1
                  ? 'order-title-element  add-border'
                  : 'order-title-element'
              }
            >
              <div>
                <span>To Ship</span>
              </div>
            </div>
            <div
              onClick={() => {
                let clone = Array(4).fill(0);
                clone[2] = 1;
                setTab(clone);
                setFetch((fetch) => !fetch);
              }}
              className={
                tab[2] == 1
                  ? 'order-title-element  add-border'
                  : 'order-title-element'
              }
            >
              <div>
                <span>Completed</span>
              </div>
            </div>
            <div
              onClick={() => {
                let clone = Array(4).fill(0);
                clone[3] = 1;
                setTab(clone);
                setFetch((fetch) => !fetch);
              }}
              className={
                tab[3] == 1
                  ? 'order-title-element  add-border'
                  : 'order-title-element'
              }
            >
              <div>
                <span>Cancelled</span>
              </div>
            </div>
          </div>
          {list.map((e, ind) => {
            const tab_ind = tab.indexOf(1);
            let filer_state = '';
            if (tab_ind === 0) filer_state = '';
            else if (tab_ind === 1) filer_state = 'shipping';
            else if (tab_ind === 2) filer_state = 'completed';
            else if (tab_ind === 3) filer_state = 'cancel';
            if (filer_state === '') {
              return <AOrder key={shortid.generate()} props={{ ind, e }} />;
            } else if (e.state === filer_state) {
              return <AOrder key={shortid.generate()} props={{ ind, e }} />;
            }
          })}
        </div>
      </div>
    </div>
  );
}
