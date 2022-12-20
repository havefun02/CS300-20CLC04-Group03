import { useState } from 'react';
import shortid from 'shortid';
import './order.css';
export default function Order() {
  const [list, setList] = useState([[{}, {}, {}], [{}]]);
  const [tab, setTab] = useState(1, 0, 0, 0, 0, 0, 0);
  const AOrder = ({ props }) => {
    return (
      <div className="order-product">
        <div className="order-product-state">
          <div>
            <div>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAC+klEQVRoge3YT2gdVRTH8c+kD5t08VRQMaUrBTcKpguFWqlgxYUr3UhD/LOoWhDpooU2EYu3NZIuFEoWCoquggndWIQKCiIuLOnGLiyprlwYtNTSUgUbbdpxMfNsasb3JvOmmTyYLwxvZu6Z85vzzj33z1BTU1NTU1OcSBCvsuZ5zGjaZ4/LZTltlOVoBdyB1/wuxu6ynEZlOcpN8CS+wG+Cu8py21eWo9wEX6Znd5bptlFajYQKsruE1c/ITaJR9T9ZFtUEcb07n8XdHazP4RsEwdz/GXU3jxTNZjHNPzEiOJbVWHWNDAuiG44W16/vxWfYgBnBtixH1XatrIxmtR21zpyP8QJ+xZDg3NLHqs5IPp51FTvxLQYx7ah1S01WPo9UNcoFi8YNW3QKjztjHyZazb2RkRZv+FnkRcRihwSPtpp6o0aW27yLPZjHZsH53spIi0GjOIlNeIe8NbLWZv9drnjLsKtO43nBkd7MCBzwE96X1Pmra3GtNY9Ngh2CmbaWfT51zV48VsUOsRMf4U1MC6bbWl779+yeRq5RYnUZT393Soo5D421l5FgESE98tjH9NqE2IY6kLVGvhoJ+kV2iY3g/vTuaZEpt/vAbn+V9kYFtTpnJNiIWbEjeEiywdmAh8UmXTDrbYMlBVFYq30gk9bjczyIOZGnDWga0MQz+AFDrjguuKWrILrUat+1LnoldXxGv0eMurSk9ZjDvrZgFpvxEt4rHEiXWn34BRyydZnz2DCIjP3HccKoSyKvp1cjhYMoqhXsSK/nI8EERtuKDGja74/MtqBJhnBRimkdbEjWNSQb+40rFu4XWVjxU8VYrjUvWZuNNwR/Yyw9biQ4gS0u20729yQLtqdnJ4SM7pmXLrU6Db+fpL8TDrs1Q/w2rQ8AkancL30TtNqveJNh7iSG8KPImNhXaesTqeP78B22pNktRpdanZfuySR1PBXI4hSeEpwtFEBJWvn2IJPWu+BlPIcH0rvfi0yJfdhVJqrUqqmp6T3+ASm/79siWC4FAAAAAElFTkSuQmCC" />
              <span style={{ color: 'green' }}>Successful delivery</span>
            </div>
            <div>
              <span style={{ color: 'red' }}>Completed</span>
            </div>
          </div>
        </div>
        {props.data.map((e, ind) => {
          return (
            <div className="order-product-item">
              <div>
                <div className="order-product-img">
                  <img src={require('../assets/th.jpg')}></img>
                </div>
                <div>
                  <div style={{ fontWeight: '300', paddingBottom: '10px' }}>
                    <span>name</span>
                  </div>
                  <div style={{ fontWeight: '100' }}>
                    <span>describe</span>
                  </div>
                </div>
              </div>
              <div>
                <span style={{ color: 'red', fontSize: '15px' }}>
                  {'33.000'}
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
                {'74.000'}
              </span>
            </span>
          </div>
          <div>
            <button
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
                let clone = Array(5).fill(0);
                clone[0] = 1;
                setTab(clone);
              }}
              className={
                tab[0] == 1
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
                let clone = Array(5).fill(0);
                clone[1] = 1;
                setTab(clone);
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
                let clone = Array(5).fill(0);
                clone[2] = 1;
                setTab(clone);
              }}
              className={
                tab[2] == 1
                  ? 'order-title-element  add-border'
                  : 'order-title-element'
              }
            >
              <div>
                <span>To Pay</span>
              </div>
            </div>
            <div
              onClick={() => {
                let clone = Array(5).fill(0);
                clone[3] = 1;
                setTab(clone);
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
            <div
              onClick={() => {
                let clone = Array(5).fill(0);
                clone[4] = 1;
                setTab(clone);
              }}
              className={
                tab[4] == 1
                  ? 'order-title-element  add-border'
                  : 'order-title-element'
              }
            >
              <div>
                <span>Returned</span>
              </div>
            </div>
          </div>
          {list.map((e, ind) => {
            return (
              <AOrder key={shortid.generate()} props={{ ind: ind, data: e }} />
            );
          })}
        </div>
      </div>
    </div>
  );
}
