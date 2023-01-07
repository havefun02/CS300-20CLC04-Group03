import { useEffect, useState } from 'react';
import shortid from 'shortid';
import axios from 'axios';
import { useContext } from 'react';
import { Context } from '../context/context';
import './cart.css';
export default function Cart() {
  const context = useContext(Context);
  const id_user = context.id;

  const [token, name, email, sex, phone, address] = [
    context.token,
    context.name,
    context.email,
    context.sex,
    context.phone,
    context.address
  ];

  const [list, setList] = useState([]);
  const [check, setCheck] = useState(Array(list.length).fill(false));
  const [gift, setGift] = useState([]);
  const [giftSelect, setSelect] = useState(null);
  const [sum, setSum] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [avar, setAvar] = useState('');
  const [expandGift, setExpandGift] = useState(false);
  const [fetch, setFetch] = [context.trigger, context.setTrigger];
  const onDelete = async (id) => {
    const token = sessionStorage.getItem('token');
    const email = sessionStorage.getItem('email');

    const options = {
      headers: {
        Authorization: 'Basic ' + token + ':' + email
        // 'content-type': 'multipart/form-data'
      }
    };
    const url = `http://localhost:3001/user/delete-cart/${id_user}/${id}`;
    const res = await axios.get(url, options).then((data) => {
      setCheck(Array(list.length).fill(false));
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
  const handleBuy = async (ids) => {
    const token = sessionStorage.getItem('token');
    const email = sessionStorage.getItem('email');

    const options = {
      headers: {
        Authorization: 'Basic ' + token + ':' + email
        // 'content-type': 'multipart/form-data'
      }
    };
    const url = `http://localhost:3001/user/cart/buy-product/${id_user}/${ids}`;
    const res = await axios.post(url, { code: gift[giftSelect] }, options).then(
      (data) => {
        setCheck(Array(list.length).fill(false));
        setFetch((fetch) => !fetch);
      },
      (err) => alert('Your product is out')
    );
  };

  const onUpdate = async (id_item, color, size, quan) => {
    console.log(id_item);
    console.log(quan);
    const token = sessionStorage.getItem('token');
    const email = sessionStorage.getItem('email');

    const options = {
      headers: {
        Authorization: 'Basic ' + token + ':' + email
        // 'content-type': 'multipart/form-data'
      }
    };
    const url = `http://localhost:3001/user/cart/update-cart/${id_user}/${id_item}`;
    const res = await axios
      .post(url, { color: color, size: size, quantity: quan }, options)
      .then((data) => {
        setCheck(Array(list.length).fill(false));
        setFetch((fetch) => !fetch);
      });
  };

  useEffect(
    (e) => {
      let sum = 0;
      check.forEach((e, ind) => {
        if (e === true) {
          sum +=
            (Number(list[ind].price) -
              (Number(list[ind].price) * Number(list[ind].price1)) / 100) *
            Number(list[ind].quantity);
        }
      });
      setSum(sum);
    },
    [check]
  );
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
      const res = await axios.get(url, options).then((data) => {
        console.log(data);
        // setAvar(data.data[0].avar.data);
        setList(data.data);
      });
    };
    fetch();
    const fetchGift = async () => {
      const url = `http://localhost:3001/user/voucher-list/${id_user}`;
      const res = await axios.get(url, options).then((data) => {
        let t = data.data.filter(
          (e) => new Date(e.date).getTime() > new Date().getTime()
        );
        setGift(t);
      });
    };
    fetchGift();
  }, [fetch]);
  const AProduct = ({ props }) => {
    const [vari, setVari] = useState(false);
    const [newSize, setNewSize] = useState(null);
    const [newColor, setNewColor] = useState(null);
    const [changeColor, setChangeColor] = useState(null);
    const [changeSize, setChangeSize] = useState(null);

    const id_item = props.e.id_item;
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
                src={`data:image/png;base64,${toBase64(props.e.avar.data)}`}
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
                <span>{props.e.name}</span>
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
                  Color: {props.e.color},Size: {props.e.size}
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
                        {props.e.color_list.map((e, ind) => {
                          if (changeColor !== ind)
                            return (
                              <span
                                id={e}
                                onClick={() => {
                                  setChangeColor(ind);
                                  setNewColor(e);
                                }}
                                key={shortid.generate()}
                              >
                                {e}
                              </span>
                            );
                          else
                            return (
                              <span
                                id={e}
                                style={{ backgroundColor: '#ccc' }}
                                onClick={() => {
                                  setChangeColor(ind);
                                  setNewColor(e);
                                }}
                                key={shortid.generate()}
                              >
                                {e}
                              </span>
                            );
                        })}
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
                        {props.e.size_list.map((e, ind) => {
                          if (changeSize !== ind)
                            return (
                              <span
                                id={e}
                                onClick={() => {
                                  setChangeSize(ind);
                                  setNewSize(e);
                                }}
                                key={shortid.generate()}
                              >
                                {e}
                              </span>
                            );
                          else
                            return (
                              <span
                                id={e}
                                style={{ backgroundColor: '#ccc' }}
                                onClick={() => {
                                  setChangeSize(ind);
                                  setNewSize(e);
                                }}
                                key={shortid.generate()}
                              >
                                {e}
                              </span>
                            );
                        })}
                      </div>
                    </div>
                    <div className="fix-gr-button">
                      <button
                        onClick={() => {
                          setVari((vari) => !vari);
                          setNewColor(null);
                          setNewSize(null);
                        }}
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() =>
                          onUpdate(
                            props.e.id_item,
                            newColor,
                            newSize,
                            props.e.quantity
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
            <span>
              {Number(props.e.price) -
                (Number(props.e.price) * Number(props.e.price1)) / 100}
            </span>
          </div>
          <div className="cart-quantity">
            <div>
              <span
                onClick={() => {
                  if (props.e.quantity > 0)
                    onUpdate(
                      props.e.id_item,
                      props.e.color,
                      props.e.size,
                      props.e.quantity - 1
                    );
                }}
              >
                -
              </span>
              <span>{props.e.quantity}</span>
              <span
                onClick={() =>
                  onUpdate(
                    props.e.id_item,
                    props.e.color,
                    props.e.size,
                    props.e.quantity + 1
                  )
                }
              >
                +
              </span>
            </div>
          </div>
          <div className="cart-price-total">
            <span>
              {(Number(props.e.price) -
                (Number(props.e.price) * Number(props.e.price1)) / 100) *
                Number(props.e.quantity).toString()}
            </span>
          </div>
          <div className="cart-delete">
            <span onClick={() => onDelete(props.e.id_item)}>Delete</span>
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
            console.log(e);
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
                      if (check.filter((e) => e === true).length > 0)
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
                        {gift.length > 0 ? (
                          gift.map((e, ind) => {
                            return (
                              <div
                                onClick={() => {
                                  setSelect(ind);
                                  setDiscount(e.discount);
                                  setExpandGift(false);
                                }}
                                key={shortid.generate()}
                              >
                                <span>
                                  Use for saving {e.discount}% per order
                                </span>
                                <span>{e.num}</span>
                              </div>
                            );
                          })
                        ) : (
                          <div>
                            <span>You have no gift</span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="cart-bottom-display">
              <div>
                <div>
                  {discount > 0 ? (
                    <span>
                      You get {discount}% discount on{' '}
                      {check.filter((e) => e === true).length} products
                    </span>
                  ) : (
                    <span>You have no voucher</span>
                  )}
                </div>
                <div>
                  <span>{(sum * discount) / 100}</span>
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
                      Total ({check.filter((e) => e === true).length}):{' '}
                      {discount > 0 ? (
                        <b style={{ color: 'blue' }}>
                          {sum - (discount * sum) / 100}
                        </b>
                      ) : (
                        sum
                      )}
                    </span>
                  </div>
                  <div className="cart-buy">
                    <button
                      onClick={() => {
                        let ids = [];
                        check.forEach((e, ind) => {
                          if (e === true) ids.push(list[ind].id_item);
                        });
                        if (ids.length > 0)
                          if (address.length > 0 && phone.length > 0)
                            handleBuy(ids);
                          else alert('Please authenticate your profile');
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
