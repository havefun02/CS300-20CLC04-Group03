import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './shoppage.css';
import shortid from 'shortid';
import { Context } from '../context/context';
import { useContext } from 'react';
import axios from 'axios';
import LoginOverlay from '../component/loginOverlay';
export default function Page({ props }) {
  console.log(props);
  const navigate = useNavigate();
  const context = useContext(Context);
  const id_user = context.id;
  const [fetchdata, setFetch] = useState(false);
  const [trigger, setTrigger] = props.state;

  const [overlay, setOverlay] = useState(false);
  const [liked, setLike] = useState([]);
  const [cateList, setCateList] = useState([]);
  const [cartList, setCartList] = useState([]);
  const [colorList, setColorList] = useState([]);
  const [sizeList, setSizeList] = useState([]);
  const [brandList, setBrandList] = useState([]);
  const [eventCate, setEventCate] = useState(false);
  const [eventSize, setEventSize] = useState(false);
  const [eventBrand, setEventBrand] = useState(false);
  const [eventColor, setEventColor] = useState(false);
  const [list, setList] = useState([]);
  const [view1, setView1] = useState({ opacity: '1' });
  const [view2, setView2] = useState({});
  const [viewType, setViewType] = useState('');
  const [titleFeature, setTitleFeature] = useState('Default');
  const [expandFeature, setExpandFeature] = useState(false);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    const fetchCate = async () => {
      const url = `http://localhost:3001/user/get-cate`;
      const res = await axios.get(url).then((data) => {
        setCateList(data.data);
      });
    };
    fetchCate();
    const fetchBrand = async () => {
      const url = `http://localhost:3001/user/get-brand`;
      const res = await axios.get(url).then((data) => {
        setBrandList(data.data);
      });
    };
    fetchBrand();
    const fetchColor = async () => {
      const url = `http://localhost:3001/user/get-color`;
      const res = await axios.get(url).then((data) => {
        setColorList(data.data);
      });
    };
    fetchColor();
    const fetchSize = async () => {
      const url = `http://localhost:3001/user/get-size`;
      const res = await axios.get(url).then((data) => {
        setSizeList(data.data);
      });
    };
    fetchSize();
  }, [fetchdata]);

  useEffect(() => {
    const fetch = async () => {
      const url = `http://localhost:3001/user/get-product/${props.id_page}`;
      const res = await axios.get(url).then((data) => {
        setList(data.data);
      });
    };
    fetch();
  }, [trigger]);

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    const email = sessionStorage.getItem('email');

    const options = {
      headers: {
        Authorization: 'Basic ' + token + ':' + email
        // 'content-type': 'multipart/form-data'
      }
    };

    const fetchLike = async () => {
      const url = `http://localhost:3001/user/${id_user}/get-liked`;
      const res = await axios.get(url, options).then((data) => {
        setLike(data.data);
      });
    };
    if (id_user !== null) fetchLike();
  }, [trigger]);

  const handleLike = async (mode, id_product) => {
    const token = sessionStorage.getItem('token');
    const email = sessionStorage.getItem('email');

    const options = {
      headers: {
        Authorization: 'Basic ' + token + ':' + email
        // 'content-type': 'multipart/form-data'
      }
    };
    if (mode === 1) {
      setTrigger((trigger) => !trigger);
      navigate(`/product/${id_product}`);
    } else if (mode === 0) {
      const url = `http://localhost:3001/user/${id_user}/del-cart/:${id_product}`;
      const res = await axios.get(url, options).then((data) => {
        setTrigger((trigger) => !trigger);
      });
    }
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
  const handleApply = async () => {
    const token = sessionStorage.getItem('token');
    const email = sessionStorage.getItem('email');

    const options = {
      headers: {
        Authorization: 'Basic ' + token + ':' + email
        // 'content-type': 'multipart/form-data'
      }
    };
    if (filter.length === 0) setTrigger((trigger) => !trigger);
    else {
      const url = `http://localhost:3001/user/get-product/apply/${filter}`;
      const res = await axios.get(url).then((data) => {
        setList(data.data);
      });
    }
  };
  const handleGroupBy = async (title) => {
    switch (title) {
      case 0: {
        break;
      }
      case 1: {
        list.sort((a, b) => a.price - b.price);
        break;
      }
      case 2: {
        list.sort((a, b) => b.price - a.price);

        break;
      }

      default:
        break;
    }
  };
  const Product = ({ props }) => {
    return (
      <div className={'product' + viewType}>
        <div className={'product-flex-box' + viewType}>
          <div>
            <img
              onClick={() => {
                navigate(`/product/${props.id_product}`);
              }}
              src={`data:image/png;base64,${toBase64(props.avar.data)}`}
            ></img>
          </div>
          <div className={'product-name' + viewType}>
            <span
              style={{
                fontSize: '15px',
                fontFamily: 'monospace',
                padding: '3px 0'
              }}
            >
              {props.name}
            </span>
            <span
              style={{
                fontSize: '15px',
                fontFamily: 'monospace',
                padding: '3px 0'
              }}
            >
              {props.sale === true ? (
                <>
                  <span style={{ color: 'red' }}>
                    {Number(props.price) -
                      (Number(props.price) * Number(props.price1)) / 100}
                    $
                  </span>
                  {'  '}
                  <span style={{ textDecoration: 'line-through' }}>
                    {Number(props.price)}$
                  </span>
                </>
              ) : (
                <span style={{}}>{Number(props.price)}$</span>
              )}
            </span>
            {viewType === '1' && <span>Description</span>}
          </div>
        </div>
        <div className={'product-add-like' + viewType}>
          {!liked.includes(props.id_product) ? (
            <img
              onClick={() => {
                if (id_user === null) setOverlay(true);
                else handleLike(1, props.id_product);
              }}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAABK0lEQVRYhe2VP05CQRCHPymwsSOcgMRwBi2k4S4cAQ+gyB3suQM2qLEzXoEGsLBSaCjkUcy8ZPmTPPb3lFDsl2wmb3f2ze/Nzs6DRCJxgrwBmY8foHtsAa+BgAxYAY1ji8gZuIjOfwWoFKw/u71xO2YzO7HjMVbAyG0LOAueVZ6UTVNMfVMMWgXmwC9Q314sygDAi9uWKOAauAA+gC9FwHYdxNJ2OxT308SO4BOrg1jefb+aQUCvgxp29gvgfJ/DIUcAeh20PcYIWJYRoNZBfv7S9QtpYC1ZaT4r4LKsALCf0ndk8Dlw+xfBwRpKH5hhRdnzuVgfmQd2v/Be8JHJr+IV1t0yn4v12eDQWxASNqOshE80PXbTeyf4yFQ9wBSY+Iv3FWGRTyJxWqwBUZF8jqhPfG0AAAAASUVORK5CYII="
            ></img>
          ) : (
            <img
              onClick={() => {
                if (id_user === null) setOverlay(true);
                else handleLike(0, props.id_product);
              }}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABX0lEQVR4nO2VTU4CQRCFy1A1cwDjCUiMZ5CNnkKPQAJVbHHlSkbuoHHJBbyBcaV3cAO6BqweNjKmmcb4H7ubIIv5kt5MqrpeV7+uAaioqNg0VOjWCBV2KdPECHbXK4DpZilgIUJonnNaX6uIJco4KEVgE/4DFWyWV4EDJ+jhfXd8lzJeeAmYtZM9l/xUAGyp4FWMANOhI+8uGMGRTbZivJMBoDiFRIWmyvQyYdhZuw9yrh26DtytxAe+qFDPPekzCGH2yQe++Ubo3ubnndpBkIAYH4xbsG3vXpmeC4YUQtFAHxihY9e96+DiMT5QwUsnvAMx5JzW7UgOGj5C81kr2YVYjGBXhcaexaeG8QRWQWEHClPfMD1aUypTZr/5xgSjQuffnLDnGxP9FA3jvmljoyyAI9+YeAFtbLxtzjj0jQlGmbKvv9eP4/UvMcEUpcGyxSkZh3bjH0z4a0xFxcbxCgc3uO99qxdYAAAAAElFTkSuQmCC"
            ></img>
          )}
        </div>
      </div>
    );
  };
  return (
    <div className="page">
      <div className="page-flex-box">
        <div className="page-title">
          <span style={{ fontWeight: '600', fontSize: '17px' }}>
            {props.title}
          </span>
        </div>
        <div className="page-function">
          <div className="page-view">
            <span>View as</span>
            <img
              style={view1}
              onClick={() => {
                setView1({ opacity: '1' });
                setView2({});
                setViewType('');
              }}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAUElEQVRIiWNgGE7gKAMDw38kfJgKcgyMSOz/WCxlpFCOgQmfJBbgjUcOqz66+uAImqLDVJAbZmD4JFOSkyI+faPJdHCB4ZNMR0vTYZxMaQIAN5lJsMwaLw8AAAAASUVORK5CYII="
            />
            <img
              style={view2}
              onClick={() => {
                setView2({ opacity: '1' });
                setView1({});
                setViewType('1');
              }}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAAbklEQVRoge3VMQ6AIBBE0cH73wo8F1YmNBQmxFmW/xI6ix2bLwEAzG5JfbPX3uPLMKSv+R+/K5J0ua9YhSHRjEPa9Ku4qvsAYEeU3Yyyh5RyCGUHDkHZzSh7SCmHUHbgEJTdjLKHlHIIZQcAfPUAKwG/tUOWwDEAAAAASUVORK5CYII="
            />
          </div>
          <div className="page-product">
            <span>{list.length} products</span>
          </div>
          <div className="page-filter">
            <span>{titleFeature}</span>
            {!expandFeature ? (
              <img
                onClick={() => setExpandFeature(true)}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAb0lEQVRIie2PsQ2AMAwELyyWcVIyCqSCaQmNI1kIRwEF0fjq998bHMf5lQDEjlyU7OPyDBzA3MglyeyWZGocFzlaDEkCNqu4hwCsIrp+UpcXGuvfSoaVa0lWklqeR5RrSf1k2HJL8km5lnxW7jj3nAwCHOMFhaBLAAAAAElFTkSuQmCC"
              ></img>
            ) : (
              <img
                onClick={() => setExpandFeature(false)}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAbElEQVRIie2Q0QnAIAwFr4uIdIP+dP8JdIIinaT9iSClSEIV+pGDgCh5Hg8cx/kdUWYKATiAE1hnhV8yQz+JQJHg8jh/rqs1r9Zvd8PCNW8qFiDTr6KtLsuOiU0We3YBSMBuDa9orMzmjmPjBhOHH8tY0fZoAAAAAElFTkSuQmCC"
              ></img>
            )}

            {expandFeature && (
              <div className="page-expand-feature">
                <div
                  onClick={() => {
                    setExpandFeature(false);
                    setTitleFeature('Default');
                    handleGroupBy(0);
                  }}
                  className="page-expand-feature-elements"
                >
                  <span>Default</span>
                </div>
                <div
                  onClick={() => {
                    setExpandFeature(false);
                    setTitleFeature('Price ascending');
                    handleGroupBy(1);
                  }}
                  className="page-expand-feature-elements"
                >
                  <span>Price ascending</span>
                </div>
                <div
                  onClick={() => {
                    setExpandFeature(false);
                    setTitleFeature('Price descending');
                    handleGroupBy(2);
                  }}
                  className="page-expand-feature-elements"
                >
                  <span>Price descending</span>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="page-main-container">
          <div className="page-wrap-tools-bar">
            <div className="page-tools-bar">
              <div className="page-tools-element">
                <div className="page-tools-select">
                  <h2
                    onClick={() => {
                      setEventCate((eventCate) => !eventCate);
                    }}
                  >
                    Category
                  </h2>
                  <img
                    onClick={() => {
                      setEventCate((eventCate) => !eventCate);
                    }}
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAb0lEQVRIie2PsQ2AMAwELyyWcVIyCqSCaQmNI1kIRwEF0fjq998bHMf5lQDEjlyU7OPyDBzA3MglyeyWZGocFzlaDEkCNqu4hwCsIrp+UpcXGuvfSoaVa0lWklqeR5RrSf1k2HJL8km5lnxW7jj3nAwCHOMFhaBLAAAAAElFTkSuQmCC"
                  ></img>
                </div>
                {eventCate && (
                  <div
                    className="page-element-expand"
                    style={{ flexWrap: 'nowrap' }}
                  >
                    {cateList.map((e, ind) => {
                      return (
                        <div
                          key={shortid.generate()}
                          onClick={() => {
                            if (!filter.includes('cate:' + e.name_cate)) {
                              let newFilter = filter.filter(
                                (e) => e.substr(0, e.indexOf(':')) !== 'cate'
                              );
                              newFilter.push('cate:' + e.name_cate);
                              setFilter(Object.assign([], newFilter));
                            }
                            setEventCate((eventCate) => !eventCate);
                          }}
                          className="page-element-expand-child"
                        >
                          <span>{e.name_cate}</span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
              <div className="page-tools-element">
                <div className="page-tools-select">
                  <h2
                    onClick={() => {
                      setEventColor((eventColor) => !eventColor);
                    }}
                  >
                    Color
                  </h2>
                  <img
                    onClick={() => {
                      setEventColor((eventColor) => !eventColor);
                    }}
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAb0lEQVRIie2PsQ2AMAwELyyWcVIyCqSCaQmNI1kIRwEF0fjq998bHMf5lQDEjlyU7OPyDBzA3MglyeyWZGocFzlaDEkCNqu4hwCsIrp+UpcXGuvfSoaVa0lWklqeR5RrSf1k2HJL8km5lnxW7jj3nAwCHOMFhaBLAAAAAElFTkSuQmCC"
                  ></img>
                </div>
                {eventColor && (
                  <div
                    className="page-element-expand"
                    style={{
                      flexDirection: 'row',
                      flex: 'auto',
                      padding: '10px'
                    }}
                  >
                    {colorList.map((e, ind) => {
                      return (
                        <div
                          onClick={() => {
                            if (!filter.includes('color:' + e.name_color)) {
                              let Newfilter = filter.filter(
                                (e) => e.substr(0, e.indexOf(':')) !== 'color'
                              );
                              Newfilter.push('color:' + e.name_color);
                              setFilter(Object.assign([], Newfilter));
                            }
                            setEventColor((eventColor) => !eventColor);
                          }}
                          key={shortid.generate()}
                          className="page-element-expand-size"
                        >
                          <span>{e.name_color}</span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
              <div className="page-tools-element">
                <div className="page-tools-select">
                  <h2
                    onClick={() => {
                      setEventSize((eventSize) => !eventSize);
                    }}
                  >
                    Size
                  </h2>
                  <img
                    onClick={() => {
                      setEventSize((eventSize) => !eventSize);
                    }}
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAb0lEQVRIie2PsQ2AMAwELyyWcVIyCqSCaQmNI1kIRwEF0fjq998bHMf5lQDEjlyU7OPyDBzA3MglyeyWZGocFzlaDEkCNqu4hwCsIrp+UpcXGuvfSoaVa0lWklqeR5RrSf1k2HJL8km5lnxW7jj3nAwCHOMFhaBLAAAAAElFTkSuQmCC"
                  ></img>
                </div>
                {eventSize && (
                  <div
                    className="page-element-expand"
                    style={{
                      flexDirection: 'row',
                      flex: 'auto',
                      padding: '10px'
                    }}
                  >
                    {sizeList.map((e, ind) => {
                      return (
                        <div
                          onClick={() => {
                            if (!filter.includes('size:' + e.name_size)) {
                              let Newfilter = filter.filter(
                                (e) => e.substr(0, e.indexOf(':')) !== 'size'
                              );
                              Newfilter.push('size:' + e.name_size);
                              setFilter(Object.assign([], Newfilter));
                            }
                            setEventSize((eventSize) => !eventSize);
                          }}
                          key={shortid.generate()}
                          className="page-element-expand-size"
                        >
                          <span>{e.name_size}</span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
              <div className="page-tools-element">
                <div className="page-tools-select">
                  <h2
                    onClick={() => {
                      setEventBrand((eventBrand) => !eventBrand);
                    }}
                  >
                    Brand
                  </h2>
                  <img
                    onClick={() => {
                      setEventBrand((eventBrand) => !eventBrand);
                    }}
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAb0lEQVRIie2PsQ2AMAwELyyWcVIyCqSCaQmNI1kIRwEF0fjq998bHMf5lQDEjlyU7OPyDBzA3MglyeyWZGocFzlaDEkCNqu4hwCsIrp+UpcXGuvfSoaVa0lWklqeR5RrSf1k2HJL8km5lnxW7jj3nAwCHOMFhaBLAAAAAElFTkSuQmCC"
                  ></img>
                </div>
                {eventBrand && (
                  <div
                    style={{ flexWrap: 'nowrap' }}
                    className="page-element-expand"
                  >
                    {brandList.map((e, ind) => {
                      return (
                        <div
                          onClick={() => {
                            console.log('clcik');
                            if (!filter.includes('brand:' + e.name_brand)) {
                              let Newfilter = filter.filter(
                                (e) => e.substr(0, e.indexOf(':')) !== 'brand'
                              );
                              Newfilter.push('brand:' + e.name_brand);
                              setFilter(Object.assign([], Newfilter));
                            }
                            setEventBrand((eventBrand) => !eventBrand);
                          }}
                          key={shortid.generate()}
                          className="page-element-expand-child"
                        >
                          <span>{e.name_brand}</span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
              {filter.length !== 0 && (
                <div className="filter-item">
                  {filter.map((e, ind) => {
                    return (
                      <div key={shortid.generate()}>
                        <span>{e}</span>
                        <span
                          onClick={() => {
                            filter.splice(ind, 1);
                            setFilter(Object.assign([], filter));
                          }}
                          style={{
                            position: 'absolute',
                            top: '-10%',
                            right: '0',
                            fontSize: '12px'
                          }}
                        >
                          x
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}
              <div
                style={{
                  width: '100%',
                  height: '40px',
                  display: 'flex',
                  flexDirection: 'row'
                }}
              >
                <div
                  style={{
                    height: '100%',
                    flex: '1',
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                >
                  <button
                    onClick={() => handleApply()}
                    style={{
                      cursor: 'pointer',
                      width: '70px',
                      height: '30px',
                      backgroundColor: '#000',
                      color: '#fff'
                    }}
                  >
                    Apply
                  </button>
                </div>

                <div
                  style={{
                    height: '100%',
                    flex: '1',
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                >
                  <button
                    onClick={() => {
                      setFilter([]);
                    }}
                    style={{
                      cursor: 'pointer',
                      width: '70px',
                      height: '30px',
                      backgroundColor: '#000',
                      color: '#fff'
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className={'page-display' + viewType}>
            {list.map((e, index) => {
              return <Product props={e} key={shortid.generate()}></Product>;
            })}
          </div>
        </div>
        {overlay && id_user === null && (
          <LoginOverlay props={[overlay, setOverlay]} />
        )}
      </div>
    </div>
  );
}
