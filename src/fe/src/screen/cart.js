import { useEffect, useState } from 'react';
import shortid from 'shortid';
import axios from 'axios';
import { useContext } from 'react';
import { Context } from '../context/context';
import './cart.css';
export default function Cart() {
  const context = useContext(Context);
  const id_user = context.id;
  const [list, setList] = useState([
    { id: 1, avar: '', name: '', color: '', size: '', price: '', quantity: 1 },
    { id: 2, avar: '', name: '', color: '', size: '', price: '', quantity: 1 }
  ]);
  const [check, setCheck] = useState(Array(list.length).fill(false));
  const [gift, setGift] = useState([
    { id: '', discount: '' },
    { id: '', discount: '' },
    { id: '', discount: '' }
  ]);
  const [giftSelect, setSelect] = useState(null);
  const [expandGift, setExpandGift] = useState(false);
  const [fetch, setFetch] = useState(false);
  const onDelete = async (id) => {
    const url = `http://localhost:3001/user:${id_user}/cart/del-product:${id}`;
    const res = await axios.post(url).then((data) => {
      setFetch((fetch) => !fetch);
    });
  };
  const handleBuy = async (ids) => {
    const url = `http://localhost:3001/user:${id_user}/cart/buy-product:`;
    const res = await axios
      .post(url, { id_products: ids, code: giftSelect })
      .then((data) => {
        setFetch((fetch) => !fetch);
      });
  };
  const onChangeQuan = async (id, quantity) => {
    const url = `http://localhost:3001/user:${id_user}/cart/update-quantity-product:${id}`;
    const res = await axios.post(url, { quantity: quantity }).then((data) => {
      setFetch((fetch) => !fetch);
    });
  };
  const onUpdateSizeColor = async (id, color, size) => {
    const url = `http://localhost:3001/user:${id_user}/cart/update-size-color-product:${id}`;
    const res = await axios
      .post(url, { color: color, size: size })
      .then((data) => {
        setFetch((fetch) => !fetch);
      });
  };
  useEffect(() => {
    const fetch = async () => {
      const url = `http://localhost:3001/user:${id_user}/cart/get_product`;
      const res = await axios.get(url).then((data) => {
        setList();
      });
    };
    const fetchGift = async () => {
      const url = `http://localhost:3001/user:${id_user}/get-gift`;
      const res = await axios.get(url).then((data) => {
        setGift();
      });
    };
  }, [fetch]);
  const AProduct = ({ props }) => {
    const [vari, setVari] = useState(false);
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
                  width: 'fit-content',
                  fontSize: '14px',
                  marginTop: '10px'
                }}
                className="edit-size"
              >
                <span
                  onClick={() => {
                    setVari((vari) => !vari);
                  }}
                >
                  Variations
                </span>
                <img
                  onClick={() => {
                    setVari((vari) => !vari);
                  }}
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAZklEQVR4nO2RQQ6AIAwEh5fxnB79itx4rTUmcDGIoiVeOufNTAngOM6vBCA+2MWyHZYnYAOWzk7KJo9GjvEKaCdS5fomcBeRr/JeRKzk5//QIq7yZCFvvcTs8qtIniGvhJlyx6HJDg+fH94Sm7UyAAAAAElFTkSuQmCC"
                ></img>
                <span
                  style={{
                    position: 'absolute',
                    top: '100%',
                    width: '250px',
                    fontSize: '13px',
                    padding: '5px 0'
                  }}
                >
                  {'Color:red, size:10uk'}
                </span>
                {vari && (
                  <div className="fix-console">
                    <div className="fix-item">
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          justifyContent: 'flex-start',
                          width: '100%!important',
                          padding: '5px 0'
                        }}
                      >
                        <span>Color</span>
                      </div>
                      <div className="list-fix">
                        <span>Color</span>
                        <span>Color</span>
                      </div>
                    </div>
                    <div className="fix-item">
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          justifyContent: 'flex-start !important',
                          width: '100% !important',
                          padding: '5px 0'
                        }}
                      >
                        <span>Size</span>
                      </div>
                      <div className="list-fix">
                        <span>Color</span>
                        <span>Color</span>
                        <span>Color</span>
                        <span>Color</span>
                        <span>Color</span>
                        <span>Color</span>
                        <span>Color</span>
                        <span>Color</span>
                      </div>
                    </div>
                    <div className="fix-gr-button">
                      <button onClick={() => setVari((vari) => !vari)}>
                        Cancel
                      </button>
                      <button
                        onClick={() =>
                          onUpdateSizeColor(
                            props.e.id,
                            props.e.color,
                            props.e.size
                          )
                        }
                      >
                        Confirm
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div style={{ fontSize: '15px' }}>
          <div className="cart-price">
            <span>Price</span>
          </div>
          <div className="cart-quantity">
            <div>
              <span
                onClick={() => {
                  if (props.e.quantity > 0)
                    onChangeQuan(props.e.id, props.e.quantity - 1);
                }}
              >
                -
              </span>
              <span>0</span>
              <span
                onClick={() => onChangeQuan(props.e.id, props.e.quantity + 1)}
              >
                +
              </span>
            </div>
          </div>
          <div className="cart-price-total">
            <span>Total</span>
          </div>
          <div className="cart-delete">
            <span onClick={() => {}}>Delete</span>
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
                <span>Actions</span>
              </div>
            </div>
          </div>
          {list.map((e, ind) => {
            return (
              <AProduct
                key={shortid.generate() + list[ind]}
                props={{ e, ind }}
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

                  {expandGift && check.includes(true) && (
                    <div className="cart-expand-gift">
                      <div>
                        {gift.map((e, ind) => {
                          return (
                            <div
                              onClick={() => {
                                setSelect(ind);
                              }}
                              key={shortid.generate()}
                            >
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
                      checked={check.filter((e) => e === true).length > 0}
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
                      Select All ({check.filter((e) => e === true).length})
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
                      Total ({check.filter((e) => e === true).length}):
                      {'123.000'}
                    </span>
                  </div>
                  <div className="cart-buy">
                    <button
                      onClick={() => {
                        let ids = [];
                        check.forEach((e, ind) => {
                          if (e === true) ids.push(list[ind].id);
                        });

                        console.log(ids);
                        handleBuy(ids);
                      }}
                    >
                      Buy
                    </button>
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
