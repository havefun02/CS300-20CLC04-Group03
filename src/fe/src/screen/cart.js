import { useState } from 'react';
import shortid from 'shortid';
import './cart.css';
export default function Cart() {
  const [list, setList] = useState([{}, {}]);
  const [check, setCheck] = useState(Array(list.length).fill(false));
  const [gift, setGift] = useState([1, 2, 3, 4, 5, 6]);
  const [expandGift, setExpandGift] = useState(false);

  const AProduct = ({ props }) => {
    return (
      <div className="cart-product">
        <div className="cart-check-all">
          <div>
            <input
              type="checkbox"
              checked={check[props.ind]}
              onChange={(e) => {
                if (e.target.checked) {
                  check[props.ind] = true;
                } else {
                  check[props.ind] = false;
                }
                setCheck(Object.assign([], check));
              }}
            ></input>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center'
            }}
          >
            <div style={{ flex: '0 0 100px', height: '100%' }}>
              <img
                src={require('../assets/overlay.jpg')}
                style={{ width: '80px', height: '80px' }}
              ></img>
            </div>
            <div
              style={{
                flex: 1,
                height: '80px',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirecttion: 'row',
                  justifyContent: 'flex-start',
                  width: '100%',
                  alignItems: 'flex-start'
                }}
              >
                <span>name</span>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirecttion: 'row',
                  justifyContent: 'flex-start',
                  width: '100%'
                }}
              >
                <span>classify</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="cart-price">
            <span>Price</span>
          </div>
          <div className="cart-quantity">
            <span>Quantity</span>
          </div>
          <div className="cart-price-total">
            <span>Total</span>
          </div>
          <div className="cart-delete">
            <span>Delete</span>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="cart">
      <div className="cart-container">
        <div className="cart-flex-box">
          <div className="cart-header">
            <div>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAhElEQVRIie2V3QqAIAxGT9HDVa8dvYj2HNVFeZH5NzGI7IMhDtzZnDioQSOggc0yDQwlAK7gxlQJgAmW6r+oLZFBSI21j2Ykjft4BV0sA6FuN/B4BSmAGZgEfjFgxd18nz+opLctOf+KHvyAjwGWc/X9/zGDY354NXAMkVyAAvqMQmvWDjXkPzRJsutpAAAAAElFTkSuQmCC"></img>
              <span>Your cart</span>
            </div>
          </div>
          <div className="cart-title">
            <div className="cart-check-all">
              <div>
                <input
                  onChange={(e) => {
                    if (e.target.checked) {
                      setCheck(Array(list.length).fill(true));
                    } else {
                      setCheck(Array(list.length).fill(false));
                    }
                  }}
                  type="checkbox"
                ></input>
              </div>
              <div>
                <span>Product</span>
              </div>
            </div>
            <div>
              <div className="cart-price">
                <span>Price</span>
              </div>
              <div className="cart-quantity">
                <span>Quantity</span>
              </div>
              <div className="cart-price-total">
                <span>Total</span>
              </div>
              <div className="cart-delete">
                <span>Delete</span>
              </div>
            </div>
          </div>
          {list.map((e, ind) => {
            return (
              <AProduct
                key={shortid.generate() + list[ind]}
                props={{ ind: ind }}
              />
            );
          })}
          <div className="cart-bottom-bar-container">
            <div className="cart-bottom-header">
              <div>
                <div>
                  <span>Your gift</span>
                </div>
                <div>
                  <span
                    onClick={() => {
                      setExpandGift((expandGift) => !expandGift);
                    }}
                    style={{
                      fontSize: '15px',
                      color: 'blue',
                      cursor: 'pointer'
                    }}
                  >
                    Select your gift
                  </span>

                  {expandGift && (
                    <div className="cart-expand-gift">
                      <div>
                        {gift.map((e, ind) => {
                          return (
                            <div onClick={() => {}} key={shortid.generate()}>
                              <span>code</span>
                              <span>discount</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="cart-bottom-display">
              <div>
                <div>
                  <span>Your discount on {gift.length} products</span>
                </div>
                <div>
                  <span>-{'10.000'}</span>
                </div>
              </div>
            </div>
            <div className="cart-bottom-main">
              <div className="cart-bottom-function-bar">
                <div style={{ flex: '0 0 700px' }} className="cart-check-all">
                  <div>
                    <input
                      checked={check.filter((e) => e == true).length > 0}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setCheck(Array(list.length).fill(true));
                        } else {
                          setCheck(Array(list.length).fill(false));
                        }
                      }}
                      type="checkbox"
                    ></input>
                  </div>
                  <div>
                    <span style={{ fontSize: '16px', fontWeight: '500' }}>
                      Select All ({check.filter((e) => e == true).length})
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flex: '0 0 400px',
                    justifyContent: 'space-between',
                    paddingRight: '50px',
                    alignItems: 'center'
                  }}
                >
                  <div className="cart-total">
                    <span>
                      Total ({check.filter((e) => e == true).length}):
                      {'123.000'}
                    </span>
                  </div>
                  <div className="cart-buy">
                    <button>Buy</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
