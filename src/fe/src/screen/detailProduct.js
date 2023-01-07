import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './detailProduct.css';
import shortid from 'shortid';
import { useEffect } from 'react';
import LoginOverlay from '../component/loginOverlay';
import axios from 'axios';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { Context } from '../context/context';
export default function DetailProduct({ props }) {
  const navigate = useNavigate();
  const location = useLocation();
  const context = useContext(Context);
  const id_user = context.id;
  const [avar, setAvar] = useState('');
  const [fetchdata, setFetch] = [context.trigger, context.setTrigger];
  const [product, setProduct] = useState([]);
  const [overlay, setOverlay] = useState(false);
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
    const fetchProduct = async () => {
      let path = location.pathname;
      let id_pro = path.split('/');
      const url = `http://localhost:3001/user/get-detail-product/${
        id_pro[id_pro.length - 1]
      }`;
      const res = await axios.get(url).then(
        (data) => {
          setAvar(data.data.avar.data);
          setProduct(data.data);
        },
        (rej) => alert(rej)
      );
    };
    fetchProduct();
  }, [fetchdata]);

  return (
    <div className="detail-container">
      <div className="detail-grid">
        <div className="detail-main">
          <div className="detail-product">
            <div className="detail-group-photo">
              <div className="main-photo">
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '35px',
                    background: '#f2f2f2'
                  }}
                >
                  <img
                    src={`data:image/png;base64,${toBase64(avar)}`}
                    style={{ height: '300px', width: '300px' }}
                  ></img>
                </div>
              </div>
              <div className="product-desc">
                <div>
                  <span
                    style={{
                      fontSize: '20px',
                      fontWeight: '700'
                    }}
                  >
                    Describe
                  </span>
                </div>
                <div>
                  <p>{product.description}</p>
                </div>
              </div>
              {/* <div className="product-detail">
                <div>
                  <span style={{ fontSize: '20px', fontWeight: '700' }}>
                    Detail Product
                  </span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <ul
                    style={{
                      flex: '1',
                      display: 'flex',
                      justifyContent: 'space-evenly',
                      height: '90px',
                      flexDirection: 'column'
                    }}
                  >
                    <li>Có dây giày</li>
                    <li>Thân giày bằng vải nylon và da phủ</li>
                    <li>Lớp lót bằng vải dệt</li>
                  </ul>
                  <ul
                    style={{
                      flex: '1',
                      display: 'flex',
                      justifyContent: 'space-evenly',
                      height: '90px',
                      flexDirection: 'column'
                    }}
                  >
                    <li>Đế ngoài bằng cao su</li>
                    <li>Màu sản phẩm: Cloud White / Silver Dawn / Off White</li>
                    <li>Mã sản phẩm: FZ6531</li>
                  </ul>
                </div>
              </div> */}
            </div>
            <div style={{ top: 0, position: 'relative', flex: 1 }}>
              <div className="detail-group-info">
                <div
                  style={{
                    width: '200px',
                    height: '30px',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    position: 'absolute',
                    right: '0'
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      paddingRight: '6px'
                    }}
                  >
                    <span
                      style={{
                        color: '#000',
                        borderBottom: '1px solid #000',
                        marginRight: '5px',
                        fontSize: '13px'
                      }}
                    >
                      Sold: {product.rate}
                    </span>
                  </div>
                </div>
                <div>
                  <div className="info-product-cate">
                    <span>
                      {product.kind} • {product.cate} • {product.brand}
                    </span>
                  </div>
                  <div className="info-product-name">
                    <span>{product.name}</span>
                  </div>
                  <div className="info-product-price">
                    <span style={{ fontWeight: '700' }}>
                      <b>Price:</b>{' '}
                      {product.sale === true ? (
                        <>
                          <span style={{ color: 'red' }}>
                            {Number(product.price) -
                              (Number(product.price) * Number(product.price1)) /
                                100}
                            $
                          </span>
                          {'  '}
                          <span style={{ textDecoration: 'line-through' }}>
                            {Number(product.price)}$
                          </span>
                        </>
                      ) : (
                        <span style={{}}>{Number(product.price)}$</span>
                      )}
                    </span>
                  </div>
                  <div className="info-product-color">
                    <span>Color</span>
                    <select id="select-color">
                      {product.color ? (
                        product.color.map((e) => {
                          return (
                            <option key={shortid.generate()} value={e}>
                              {e}
                            </option>
                          );
                        })
                      ) : (
                        <></>
                      )}
                    </select>
                  </div>
                  <div className="info-product-color">
                    <span>Size</span>
                    <select id="select-size">
                      {product.size ? (
                        product.size.map((e) => {
                          return (
                            <option key={shortid.generate()} value={e}>
                              {e}
                            </option>
                          );
                        })
                      ) : (
                        <></>
                      )}
                    </select>
                  </div>
                  <div className="info-product-color">
                    <span>Quantity</span>
                    <input id="select-quantity" placeholder=""></input>
                    {Number(product.quantity) > 0 ? (
                      <span style={{ position: 'absolute', right: '-100%' }}>
                        In stock: {product.quantity}
                      </span>
                    ) : (
                      <span
                        style={{
                          position: 'absolute',
                          right: '-100%',
                          color: 'red'
                        }}
                      >
                        Out of stock
                      </span>
                    )}
                  </div>
                  <div className="info-product-cart">
                    <div>
                      <button
                        onClick={async () => {
                          if (id_user !== null) {
                            let color =
                              document.getElementById('select-color').value;
                            let size =
                              document.getElementById('select-size').value;
                            let quantity =
                              document.getElementById('select-quantity').value;
                            const token = sessionStorage.getItem('token');
                            const email = sessionStorage.getItem('email');

                            const options = {
                              headers: {
                                Authorization: 'Basic ' + token + ':' + email
                                // 'content-type': 'multipart/form-data'
                              }
                            };

                            const url = `http://localhost:3001/user/add-cart/${id_user}`;

                            if (color && size && quantity > 0) {
                              const res = await axios
                                .post(
                                  url,
                                  {
                                    id_product: product.id_product,
                                    size: size,
                                    color: color,
                                    quantity: quantity
                                  },
                                  options
                                )
                                .then(
                                  (data) => {
                                    navigate('/cart');
                                  },
                                  (rej) => alert(rej)
                                );
                            }
                          } else {
                            setOverlay(true);
                          }
                        }}
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {overlay && id_user === null && (
            <LoginOverlay props={[overlay, setOverlay]} />
          )}
        </div>
      </div>
    </div>
  );
}
