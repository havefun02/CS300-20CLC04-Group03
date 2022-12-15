import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useContext } from 'react';
import { Context } from '../context/context';
import Header from '../../../fe/src/component/header';
import './approute.css';
import { useState } from 'react';
import ImgOverlay from '../component/imgoverlay';
import Page from '../screen/shoppage';
import Footer from '../component/footer';
import Cart from '../screen/cart';
import Profile from '../screen/profile';
import DetailProduct from '../screen/detailProduct';
export default function AppRoute() {
  const context = useContext(Context);
  const [isLog, setIsLog] = [context.isLog, context.setIsLog];
  const [access, setAccess] = [context.access, context.setAccess];

  return (
    <BrowserRouter>
      <div className="route-main">
        <div className="route-grid">
          {!access && <ImgOverlay props={[access, setAccess]} />}
          <div className="route-flex-box">
            <Header></Header>
            <Routes>
              <Route
                path="/"
                element={<Page props={{ title: 'All product' }} />}
              ></Route>
              <Route path={'/product'} element={<DetailProduct />}>
                <Route path={':id'} element={<DetailProduct />}></Route>
              </Route>
              <Route
                path="*"
                element={
                  <div
                    style={{
                      flex: '0 0 500px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '30px'
                    }}
                  >
                    <span>Page not found</span>
                  </div>
                }
              />

              <Route
                path="/newin"
                element={<Page props={{ title: 'New Product' }} />}
              ></Route>
              <Route
                path="/sale"
                element={<Page props={{ title: 'On big sale' }} />}
              ></Route>
              <Route
                path="/men"
                element={<Page props={{ title: 'For men' }} />}
              ></Route>
              <Route
                path="/women"
                element={<Page props={{ title: 'For women' }} />}
              ></Route>
              {/* <Route path="/bestseller" element={<Page props={} />}></Route> */}

              <Route
                path="/cart"
                element={isLog ? <Cart /> : <div></div>}
              ></Route>
              <Route
                path="/buy"
                element={isLog ? <Page /> : <div></div>}
              ></Route>
              <Route
                path="/profile"
                element={isLog ? <Profile /> : <div></div>}
              ></Route>
            </Routes>
            <Footer />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
