import { useState } from 'react';
import './shoppage.css';
export default function Page({ props }) {
  const [view1, setView1] = useState({ opacity: '1' });
  const [view2, setView2] = useState({});

  const Product = ({ props }) => {
    return (
      <div className="product">
        <div className="product-flex-box">
          <img src={require('../assets/overlay.jpg')}></img>
          <h4>name</h4>
          <h4>price</h4>
          <h3>state</h3>
        </div>
        <div className="product-add-like">
          <span>1</span>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABj0lEQVRIid2Uv04CQRDGf3KBRnkDTayFyjfwb2ckoPAKEolEa19AsbO3IryEJaWxEYwQtNResBBjchY7m1vW3dwdJZNM7nbm2/lmv/0Di245oAZ0gAHwJT6QWFUwc1kFeAPCGH8FymkKB8CNUeAJaAIFYFm8ILGegWsBmSQEuvg3ULcmrQGrVjOnwFTmXMcVrxjFt6zcJvAOdB3ztg2Skq94jkjzEyt3gNrcELj3zG9IfoRn42tEmpuy1IFfIq0vPQQB0BfMsQvQkWTTiuul+9yU7FxibRfBUJIbVjzumIYGtijjgYtgLMl8SoKhgc1LbKwDptZLLtYEduuoEbqA80j0yeyK/0lkruBRvnspur8DJsZ4X74PLnBV2HuoI6et6+n+A1g3cAHwLLkjF0EO9XCFqOuf1s6ILlrWByoLaArspCi+C/zI3MM4cMsgaTArl20BqnNd/CpJNxnUq6i17qNuaBFYES8CF0Sa6+KJnmttJZSecRdtRAJZfJZFPVxt4AV1JCfy30adFu+GLob9AXAzn1A8JNGEAAAAAElFTkSuQmCC"></img>
        </div>
        <div className="product-add-cart">
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
              }}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAUElEQVRIiWNgGE7gKAMDw38kfJgKcgyMSOz/WCxlpFCOgQmfJBbgjUcOqz66+uAImqLDVJAbZmD4JFOSkyI+faPJdHCB4ZNMR0vTYZxMaQIAN5lJsMwaLw8AAAAASUVORK5CYII="
            />
            <img
              style={view2}
              onClick={() => {
                setView2({ opacity: '1' });
                setView1({});
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
        <div className="page-display">
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
  );
}
