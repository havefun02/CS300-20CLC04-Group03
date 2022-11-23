import { useState } from 'react';
import './shoppage.css';
export default function Page({ props }) {
  const [view1, setView1] = useState({ opacity: '1' });
  const [view2, setView2] = useState({});
  const [viewType, setViewType] = useState('');
  const [eventCate, setEventCate] = useState(false);
  const [eventSize, setEventSize] = useState(false);
  const [eventBrand, setEventBrand] = useState(false);
  const [eventColor, setEventColor] = useState(false);
  const [eventPrice, setEventPrice] = useState(false);
  const [startPrice, setStartPrice] = useState(0);
  const [endPrice, setEndPrice] = useState(0);

  const Product = ({ props }) => {
    return (
      <div className={'product' + viewType}>
        <div className={'product-flex-box' + viewType}>
          <img src={require('../assets/overlay.jpg')}></img>
          <h4>name</h4>
          <h4>price</h4>
          <h3>state</h3>
          {viewType === '1' && <h4>Description</h4>}
        </div>
        <div className={'product-add-like' + viewType}>
          <span>1</span>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABj0lEQVRIid2Uv04CQRDGf3KBRnkDTayFyjfwb2ckoPAKEolEa19AsbO3IryEJaWxEYwQtNResBBjchY7m1vW3dwdJZNM7nbm2/lmv/0Di245oAZ0gAHwJT6QWFUwc1kFeAPCGH8FymkKB8CNUeAJaAIFYFm8ILGegWsBmSQEuvg3ULcmrQGrVjOnwFTmXMcVrxjFt6zcJvAOdB3ztg2Skq94jkjzEyt3gNrcELj3zG9IfoRn42tEmpuy1IFfIq0vPQQB0BfMsQvQkWTTiuul+9yU7FxibRfBUJIbVjzumIYGtijjgYtgLMl8SoKhgc1LbKwDptZLLtYEduuoEbqA80j0yeyK/0lkruBRvnspur8DJsZ4X74PLnBV2HuoI6et6+n+A1g3cAHwLLkjF0EO9XCFqOuf1s6ILlrWByoLaArspCi+C/zI3MM4cMsgaTArl20BqnNd/CpJNxnUq6i17qNuaBFYES8CF0Sa6+KJnmttJZSecRdtRAJZfJZFPVxt4AV1JCfy30adFu+GLob9AXAzn1A8JNGEAAAAAElFTkSuQmCC"></img>
        </div>
        <div className={'product-add-cart' + viewType}>
          <span>1</span>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAhElEQVRIie2V3QqAIAxGT9HDVa8dvYj2HNVFeZH5NzGI7IMhDtzZnDioQSOggc0yDQwlAK7gxlQJgAmW6r+oLZFBSI21j2Ykjft4BV0sA6FuN/B4BSmAGZgEfjFgxd18nz+opLctOf+KHvyAjwGWc/X9/zGDY354NXAMkVyAAvqMQmvWDjXkPzRJsutpAAAAAElFTkSuQmCC"></img>
        </div>
      </div>
    );
  };
  return (
    <div className="page">
      <div className="page-flex-box">
        <div className="page-title">
          <h2>{props.title}</h2>
        </div>
        <div className="page-function">
          <div className="page-view">
            <h3>View as</h3>
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
            <h3>500 products</h3>
          </div>
          <div className="page-filter">
            <h3>Featured</h3>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAb0lEQVRIie2PsQ2AMAwELyyWcVIyCqSCaQmNI1kIRwEF0fjq998bHMf5lQDEjlyU7OPyDBzA3MglyeyWZGocFzlaDEkCNqu4hwCsIrp+UpcXGuvfSoaVa0lWklqeR5RrSf1k2HJL8km5lnxW7jj3nAwCHOMFhaBLAAAAAElFTkSuQmCC"></img>
          </div>
        </div>
        <div className="page-main-container">
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
                <div className="page-element-expand">
                  <div className="page-element-expand-child">
                    <h3>1</h3>
                  </div>
                  <div className="page-element-expand-child">
                    <h3>1</h3>
                  </div>
                  <div className="page-element-expand-child">
                    <h3>1</h3>
                  </div>
                  <div className="page-element-expand-child">
                    <h3>1</h3>
                  </div>
                  <div className="page-element-expand-child">
                    <h3>1</h3>
                  </div>
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
                <div className="page-element-expand">
                  <div className="page-element-expand-child">
                    <h3>1</h3>
                  </div>
                  <div className="page-element-expand-child">
                    <h3>1</h3>
                  </div>
                  <div className="page-element-expand-child">
                    <h3>1</h3>
                  </div>
                  <div className="page-element-expand-child">
                    <h3>1</h3>
                  </div>
                  <div className="page-element-expand-child">
                    <h3>1</h3>
                  </div>
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
                <div className="page-size-expand">
                  <div className="page-element-expand-size">
                    <h3>1</h3>
                  </div>
                  <div className="page-element-expand-size">
                    <h3>1</h3>
                  </div>
                  <div className="page-element-expand-size">
                    <h3>1</h3>
                  </div>
                  <div className="page-element-expand-size">
                    <h3>1</h3>
                  </div>
                  <div className="page-element-expand-size">
                    <h3>1</h3>
                  </div>
                  <div className="page-element-expand-size">
                    <h3>1</h3>
                  </div>
                  <div className="page-element-expand-size">
                    <h3>1</h3>
                  </div>
                  <div className="page-element-expand-size">
                    <h3>1</h3>
                  </div>
                  <div className="page-element-expand-size">
                    <h3>1</h3>
                  </div>
                  <div className="page-element-expand-size">
                    <h3>1</h3>
                  </div>
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
                  <div className="page-element-expand-child">
                    <h3>1</h3>
                  </div>
                  <div className="page-element-expand-child">
                    <h3>1</h3>
                  </div>
                  <div className="page-element-expand-child">
                    <h3>1</h3>
                  </div>
                  <div className="page-element-expand-child">
                    <h3>1</h3>
                  </div>
                  <div className="page-element-expand-child">
                    <h3>1</h3>
                  </div>
                </div>
              )}
            </div>
            <div className="page-tools-element">
              <div className="page-tools-select">
                <h2
                  onClick={() => {
                    setEventPrice((eventPrice) => !eventPrice);
                  }}
                >
                  Price
                </h2>
                <img
                  onClick={() => {
                    setEventPrice((eventPrice) => !eventPrice);
                  }}
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAb0lEQVRIie2PsQ2AMAwELyyWcVIyCqSCaQmNI1kIRwEF0fjq998bHMf5lQDEjlyU7OPyDBzA3MglyeyWZGocFzlaDEkCNqu4hwCsIrp+UpcXGuvfSoaVa0lWklqeR5RrSf1k2HJL8km5lnxW7jj3nAwCHOMFhaBLAAAAAElFTkSuQmCC"
                ></img>
              </div>
              {eventPrice && (
                <div className="page-element-expand-price">
                  <input
                    onChange={(e) => {
                      setStartPrice(e.target.value);
                    }}
                    placeholder="Start"
                  ></input>
                  <span style={{ fontSize: '15px' }}>To</span>
                  <input
                    onChange={(e) => {
                      setEndPrice(e.target.value);
                    }}
                    placeholder="End"
                  ></input>
                </div>
              )}
            </div>
          </div>
          <div className={'page-display' + viewType}>
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </div>
      </div>
    </div>
  );
}
