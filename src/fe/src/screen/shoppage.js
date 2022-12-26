import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import './shoppage.css';
import shortid from 'shortid';

export default function Page({ props }) {
  const navigate = useNavigate();
  const [cateList, setCateList] = useState([1, 1, 1, 1, 1, 1, 1]);
  const [colorList, setColorList] = useState([1, 1, 1, 1, 1]);
  const [sizeList, setSizeList] = useState([1, 1, 1, 1, 1, 1, 1, 1]);
  const [brandList, setBrandList] = useState([]);
  const [view1, setView1] = useState({ opacity: '1' });
  const [view2, setView2] = useState({});
  const [viewType, setViewType] = useState('');
  const [eventCate, setEventCate] = useState(false);
  const [eventSize, setEventSize] = useState(false);
  const [eventBrand, setEventBrand] = useState(false);
  const [eventColor, setEventColor] = useState(false);
  const [cate, setCate] = useState(null);
  const [Size, setSize] = useState(null);
  const [Brand, setBrand] = useState(null);
  const [Color, setColor] = useState(null);

  const [expandFeature, setExpandFeature] = useState(false);
  const [titleFeature, setTitleFeature] = useState('Featured');
  const [list, setList] = useState([
    { code: 1, liked: false },
    { code: 2, liked: false },
    { code: 3, liked: false },
    { code: 4, liked: true }
  ]);
  const [filter, setFilter] = useState(['123123123', '3123123123123', 3, 4]);

  const Product = ({ props }) => {
    return (
      <div className={'product' + viewType}>
        <div className={'product-flex-box' + viewType}>
          <div>
            <img
              onClick={() => {
                navigate(`/product/${props.code}`);
              }}
              src={require('../assets/overlay.jpg')}
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
              Name
            </span>
            <span
              style={{
                fontSize: '15px',
                fontFamily: 'monospace',
                padding: '3px 0'
              }}
            >
              500$
            </span>
            {viewType === '1' && <span>Description</span>}
          </div>
        </div>
        <div className={'product-add-like' + viewType}>
          {!props.liked ? (
            <img
              onClick={() => {}}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAABK0lEQVRYhe2VP05CQRCHPymwsSOcgMRwBi2k4S4cAQ+gyB3suQM2qLEzXoEGsLBSaCjkUcy8ZPmTPPb3lFDsl2wmb3f2ze/Nzs6DRCJxgrwBmY8foHtsAa+BgAxYAY1ji8gZuIjOfwWoFKw/u71xO2YzO7HjMVbAyG0LOAueVZ6UTVNMfVMMWgXmwC9Q314sygDAi9uWKOAauAA+gC9FwHYdxNJ2OxT308SO4BOrg1jefb+aQUCvgxp29gvgfJ/DIUcAeh20PcYIWJYRoNZBfv7S9QtpYC1ZaT4r4LKsALCf0ndk8Dlw+xfBwRpKH5hhRdnzuVgfmQd2v/Be8JHJr+IV1t0yn4v12eDQWxASNqOshE80PXbTeyf4yFQ9wBSY+Iv3FWGRTyJxWqwBUZF8jqhPfG0AAAAASUVORK5CYII="
            ></img>
          ) : (
            <img
              onClick={() => {}}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAABrElEQVRYhe2VMW4UQRBFX42srhbsRogEEiQnvoMDOzFn4AAEHAFBjA03ICGAhDtAYiOTcgAQImGdkK13i23JnnLgsViNd73TjVZyME+aoLv+6P/pqpmBnp6e24aF8NVUvbnGf0N4vk6/6tqOSD23GrrI/kx1c50hlmIxfjRVn6o+W5fHxk1Fdz8SeCIiO8BbU/0FPCo1c3spanN6Wn83vXWzCfzv2wSbLrIH61LkTcP2ffZKojU/UUwlaJqUMw1VNTPT8dDO636zeeAAAiXwDORHZLAsxi3AYGiHwbTiZ/sgO4+9FlDtkpCVDDHoDDp0X1lQHac5AbQOBxY5Tf/ytK52A8HN4z1XNTnTjoIs3qGYDiOdhIaQ+oBA4FUnGA0jnwf/1fevydejpT3azhR1d9O0cFWzGl74uKnU4gpvRT3F84jDPNJ+L+cpl5Fs0H5Y2pnpjqyGI8cAi5mmIsxtdzv2k3VZ/GuJ+radO5p6Y6Ah5QVduAUNfHwMmdlB7maNp0ew2Xh/b/0GQGEPkAQF0fN0+Gi7zP1pTiECzGg+ar+Hsa46uFQ7hC09Nz67gA7ZzSKgZNkUYAAAAASUVORK5CYII="
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
            <span>500 products</span>
          </div>
          <div className="page-filter">
            <span>{titleFeature}</span>
            <img
              onClick={(e) => {
                if (
                  e.target.src ===
                  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAb0lEQVRIie2PsQ2AMAwELyyWcVIyCqSCaQmNI1kIRwEF0fjq998bHMf5lQDEjlyU7OPyDBzA3MglyeyWZGocFzlaDEkCNqu4hwCsIrp+UpcXGuvfSoaVa0lWklqeR5RrSf1k2HJL8km5lnxW7jj3nAwCHOMFhaBLAAAAAElFTkSuQmCC'
                ) {
                  setExpandFeature((expandFeature) => !expandFeature);
                  e.target.src =
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAbElEQVRIie2Q0QnAIAwFr4uIdIP+dP8JdIIinaT9iSClSEIV+pGDgCh5Hg8cx/kdUWYKATiAE1hnhV8yQz+JQJHg8jh/rqs1r9Zvd8PCNW8qFiDTr6KtLsuOiU0We3YBSMBuDa9orMzmjmPjBhOHH8tY0fZoAAAAAElFTkSuQmCC';
                } else {
                  setExpandFeature((expandFeature) => !expandFeature);

                  e.target.src =
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAb0lEQVRIie2PsQ2AMAwELyyWcVIyCqSCaQmNI1kIRwEF0fjq998bHMf5lQDEjlyU7OPyDBzA3MglyeyWZGocFzlaDEkCNqu4hwCsIrp+UpcXGuvfSoaVa0lWklqeR5RrSf1k2HJL8km5lnxW7jj3nAwCHOMFhaBLAAAAAElFTkSuQmCC';
                }
              }}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAb0lEQVRIie2PsQ2AMAwELyyWcVIyCqSCaQmNI1kIRwEF0fjq998bHMf5lQDEjlyU7OPyDBzA3MglyeyWZGocFzlaDEkCNqu4hwCsIrp+UpcXGuvfSoaVa0lWklqeR5RrSf1k2HJL8km5lnxW7jj3nAwCHOMFhaBLAAAAAElFTkSuQmCC"
            ></img>
            {expandFeature && (
              <div className="page-expand-feature">
                <div
                  onClick={() => {
                    setTitleFeature('Featured');
                  }}
                  className="page-expand-feature-elements"
                >
                  <span>Featured</span>
                </div>
                <div
                  onClick={() => {
                    setTitleFeature('Price ascending');
                  }}
                  className="page-expand-feature-elements"
                >
                  <span>Price ascending</span>
                </div>
                <div
                  onClick={() => {
                    setTitleFeature('Price descending');
                  }}
                  className="page-expand-feature-elements"
                >
                  <span>Price descending</span>
                </div>
                <div
                  onClick={() => {
                    setTitleFeature('Title ascending');
                  }}
                  className="page-expand-feature-elements"
                >
                  <span> Title ascending</span>
                </div>
                <div
                  onClick={() => {
                    setTitleFeature('Title descending');
                  }}
                  className="page-expand-feature-elements"
                >
                  <span> Title ascending</span>
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
                          onClick={() => {}}
                          className="page-element-expand-child"
                        >
                          <span>1</span>
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
                    style={{ flexDirection: 'row', flex: 'auto' }}
                  >
                    {colorList.map((e, ind) => {
                      return (
                        <div className="page-element-expand-size">
                          <span>1</span>
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
                    style={{ flexDirection: 'row', flex: 'auto' }}
                  >
                    {sizeList.map((e, ind) => {
                      return (
                        <div className="page-element-expand-size">
                          <span>1</span>
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
                  <div className="page-element-expand">
                    {brandList.map((e, ind) => {
                      return (
                        <div className="page-element-expand-child">
                          <span>1</span>
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
                      <div>
                        <span>{e}</span>
                        <span
                          onClick={() => {
                            filter.splice(ind, 1);
                            return setFilter(Object.assign([], filter));
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
                    onClick={() => {}}
                    style={{
                      cursor: 'pointer',
                      width: '70px',
                      height: '30px',
                      backgroundColor: '#ccc'
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
                      backgroundColor: '#ccc'
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
      </div>
    </div>
  );
}
