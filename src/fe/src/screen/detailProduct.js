import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './detailProduct.css';
import shortid from 'shortid';

export default function DetailProduct({ props }) {
  const navigate = useNavigate();
  return (
    <div className="detail-container">
      <div className="detail-grid">
        <div className="detail-main">
          <div className="detail-product">
            <div className="detail-group-photo">
              <div className="main-photo"></div>
              <div className="list-photo">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
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
                  <p>
                    ĐÔI GIÀY BÓNG RỔ MANG PHONG CÁCH BIỂU TƯỢNG CỦA THẬP NIÊN
                    80. Suốt gần 40 năm, Forum đã trở thành một phần không thể
                    thiếu của adidas. Đôi giày biểu tượng này vẫn giữ nguyên
                    thiết kế ban đầu với 3 Sọc huyền thoại và lớp phủ ngoài kinh
                    điển. Các điểm nhấn sặc sỡ và bằng nylon bổ sung hài hòa
                    trên thân giày gọn ghẽ bằng da cho vẻ ngoài đa năng, đơn
                    giản mà thanh lịch, nhưng cũng táo bạo và cá tính.
                  </p>
                </div>
              </div>
              <div className="product-detail">
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
              </div>
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
                        color: 'red',
                        borderBottom: '1px solid red',
                        marginRight: '5px'
                      }}
                    >
                      4.6
                    </span>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <img
                        onClick={() => {}}
                        style={{ width: '17px', height: '17px' }}
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADF0lEQVRoge2ZTUgVURiGn1EQDanoh6ilIf1R9If9Z0QQ5CLBiKLASKNNLSKIpEVErayVuzYFQUTRqk2g0MIgSEgiSQ2pXUqWCRbZj/a2mLl1vd47njMzzrmLXvh2M9/3PufMOXPmG/ivmSW4I3gjmO/aS2QJ9goUxDnXfiJJUCp4lQUyIChx7ctagqYsiEzsd+3LSoJKwWAekEeuvVlJcCUPhASTgirX/owkWCb4WgBEguuuPRpJcCsEQoIRwRzXPkMlWB88PmEgEjS79hoqwRMDCAleF+1WLKg3hMjEIdeepyl4+fVagrwUeK69T5HgmCVEJg669v5XwWz0RQTpLppZERyPCJH4rBiNiKAUqAX2ATXAcmABMDchH6PAF2AsiHdAH9AP9AIDHkyGJQgFEWwBjgKHgaUJGI6qMeBZEE+B5x6MZ1/gAQjKgHnAImAFsBk4gj/yxahxfKB2oN2DHk/QCexy6yu2OktI7jl3qRIE2wQTMXcfVzEhaBWUAyA4XQSmbOOtYPe0uRFcLQJzJvFb0KawzwHBWZkdxV3FkKDOaNXIf1v/LALTufFAsNBqCxBsFfQXgXkJvgsarQByYCrkNxLGHUJ8FOyMDJEDVCV4KH+RpQkxLFiTCEQOUI2gMyWIUcGmxCGyYDxBcwogDbberJoAHgj4YFskgqxnI0o340CEe2x1SlAxa9kF5YJPKa2TptkEOZHirtU1WxAl8ptraW7B60z92ayRBmC1/RDEUvQ3ej4F2253yrMh+f9ZkmsZCeocQGRipYlH00erJcY4xNUek4tmBJHfz9oRwcA3oA3/vHQSv5UTRbUR75sqwX3LR2FUcE2wOE+utYK7susRDCYBsUTww7DgkOCCDLoygmrBPZmfqKvjgrQYFHkvOKNMJ8Mu/3ZBl0GN+rggYZ32YcF5xTwTyX/RNgYDUqjWxTgFNhRI+llwSVAZByBPvUrBjQLr53acxK05yX4JbuZbxElK/k/VFzm1o+54IL8Blkn0WLAqQb8z1S4TXNa/bs5InGQdgh6l8/1RyMNG+UejDlceUtcfvKNQTwLAJA4AAAAASUVORK5CYII="
                      />

                      <img
                        onClick={() => {}}
                        style={{ width: '17px', height: '17px' }}
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABr0lEQVRIidXUTYhNYRgH8N/BgilhLMZMQxYKKQukbCyUkljc7cSUlZ1SSik7WShl4SsLKzsLwoZZSNkwtyyUlVkoZkX5yueYx8JzdbqdO/fcurc49faep/f/9Z7nfQ//0hOcCYpBie8K5oN9gxAvgidBBFODMJhI8dbY1k/xpcGrFH6e891+GhxJ0WfBmuBT1jv7ZfA0BQ9nfTbr+3X4RZJWYC22Yjd2YD1WYRHeYbzgWzCMGaxMjY/4kOMNptHEdMFsK+WNtia2j2ttuzrRBf8+mCwTlgcPS4AHwbr4k77bJxwKTpa4U8F4FXBZcCGYS+BMsL+GwbG8gPPB6a43PdgeNEuJbmWPqrCTifkVHOoWpkxcHBwvmQxXYEaCz7l+tLZ4SWBjkl93WF8SvE3M5k46CzXxYM6PSqJDrfeCOdzJslE/ur8/txeZrhFsCq4H34OX2czR4EBimr0a7Enij+B2NrH9rH8NrgQ/8wSN9WJws0LscrAh2BvcqzCdqCs+lskj+BKcD0YqcFvyQrYMrtY1OJXbvhSM1sA3gtngcV2Dcwsduw6c1cHFXjj/z/Mb0TwjJ2HCa5EAAAAASUVORK5CYII="
                      ></img>

                      <img
                        onClick={() => {}}
                        style={{ width: '17px', height: '17px' }}
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABr0lEQVRIidXUTYhNYRgH8N/BgilhLMZMQxYKKQukbCyUkljc7cSUlZ1SSik7WShl4SsLKzsLwoZZSNkwtyyUlVkoZkX5yueYx8JzdbqdO/fcurc49faep/f/9Z7nfQ//0hOcCYpBie8K5oN9gxAvgidBBFODMJhI8dbY1k/xpcGrFH6e891+GhxJ0WfBmuBT1jv7ZfA0BQ9nfTbr+3X4RZJWYC22Yjd2YD1WYRHeYbzgWzCMGaxMjY/4kOMNptHEdMFsK+WNtia2j2ttuzrRBf8+mCwTlgcPS4AHwbr4k77bJxwKTpa4U8F4FXBZcCGYS+BMsL+GwbG8gPPB6a43PdgeNEuJbmWPqrCTifkVHOoWpkxcHBwvmQxXYEaCz7l+tLZ4SWBjkl93WF8SvE3M5k46CzXxYM6PSqJDrfeCOdzJslE/ur8/txeZrhFsCq4H34OX2czR4EBimr0a7Enij+B2NrH9rH8NrgQ/8wSN9WJws0LscrAh2BvcqzCdqCs+lskj+BKcD0YqcFvyQrYMrtY1OJXbvhSM1sA3gtngcV2Dcwsduw6c1cHFXjj/z/Mb0TwjJ2HCa5EAAAAASUVORK5CYII="
                      ></img>

                      <img
                        onClick={() => {}}
                        style={{ width: '17px', height: '17px' }}
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABr0lEQVRIidXUTYhNYRgH8N/BgilhLMZMQxYKKQukbCyUkljc7cSUlZ1SSik7WShl4SsLKzsLwoZZSNkwtyyUlVkoZkX5yueYx8JzdbqdO/fcurc49faep/f/9Z7nfQ//0hOcCYpBie8K5oN9gxAvgidBBFODMJhI8dbY1k/xpcGrFH6e891+GhxJ0WfBmuBT1jv7ZfA0BQ9nfTbr+3X4RZJWYC22Yjd2YD1WYRHeYbzgWzCMGaxMjY/4kOMNptHEdMFsK+WNtia2j2ttuzrRBf8+mCwTlgcPS4AHwbr4k77bJxwKTpa4U8F4FXBZcCGYS+BMsL+GwbG8gPPB6a43PdgeNEuJbmWPqrCTifkVHOoWpkxcHBwvmQxXYEaCz7l+tLZ4SWBjkl93WF8SvE3M5k46CzXxYM6PSqJDrfeCOdzJslE/ur8/txeZrhFsCq4H34OX2czR4EBimr0a7Enij+B2NrH9rH8NrgQ/8wSN9WJws0LscrAh2BvcqzCdqCs+lskj+BKcD0YqcFvyQrYMrtY1OJXbvhSM1sA3gtngcV2Dcwsduw6c1cHFXjj/z/Mb0TwjJ2HCa5EAAAAASUVORK5CYII="
                      ></img>

                      <img
                        onClick={() => {}}
                        style={{ width: '17px', height: '17px' }}
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABr0lEQVRIidXUTYhNYRgH8N/BgilhLMZMQxYKKQukbCyUkljc7cSUlZ1SSik7WShl4SsLKzsLwoZZSNkwtyyUlVkoZkX5yueYx8JzdbqdO/fcurc49faep/f/9Z7nfQ//0hOcCYpBie8K5oN9gxAvgidBBFODMJhI8dbY1k/xpcGrFH6e891+GhxJ0WfBmuBT1jv7ZfA0BQ9nfTbr+3X4RZJWYC22Yjd2YD1WYRHeYbzgWzCMGaxMjY/4kOMNptHEdMFsK+WNtia2j2ttuzrRBf8+mCwTlgcPS4AHwbr4k77bJxwKTpa4U8F4FXBZcCGYS+BMsL+GwbG8gPPB6a43PdgeNEuJbmWPqrCTifkVHOoWpkxcHBwvmQxXYEaCz7l+tLZ4SWBjkl93WF8SvE3M5k46CzXxYM6PSqJDrfeCOdzJslE/ur8/txeZrhFsCq4H34OX2czR4EBimr0a7Enij+B2NrH9rH8NrgQ/8wSN9WJws0LscrAh2BvcqzCdqCs+lskj+BKcD0YqcFvyQrYMrtY1OJXbvhSM1sA3gtngcV2Dcwsduw6c1cHFXjj/z/Mb0TwjJ2HCa5EAAAAASUVORK5CYII="
                      ></img>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="info-product-cate">
                    <span>Nữ • Originals</span>
                  </div>
                  <div className="info-product-name">
                    <span>GIÀY FORUM LOW CLASSIC</span>
                  </div>
                  <div className="info-product-price">
                    <span style={{ fontWeight: '700' }}>100$</span>
                  </div>
                  <div className="info-product-color">
                    <span>Cloud White / Silver Dawn / Off White</span>
                  </div>
                  <div className="info-product-size">
                    <span>size</span>
                  </div>
                  <div className="info-product-quantity">
                    <select
                      style={{
                        width: '70px',
                        height: '30px',
                        verticalAlign: 'middle'
                      }}
                      name="quantity"
                    >
                      {Array(5)
                        .fill(0)
                        .map((e, index) => {
                          return (
                            <option key={shortid.generate()}>
                              {index + 7}
                            </option>
                          );
                        })}
                    </select>
                  </div>
                  <div className="info-product-cart">
                    <div>
                      <button>Add to cart</button>
                    </div>
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
