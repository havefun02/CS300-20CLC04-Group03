import './approute.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useContext } from 'react';
import { Context } from '../context/context';
import Header from '../../../fe/src/component/header';
import ImgOverlay from '../component/imgoverlay';
import Page from '../screen/shoppage';
import Footer from '../component/footer';
import Cart from '../screen/cart';
import Order from '../screen/order';
import Profile from '../screen/profile';
import Gift from '../screen/gift';
import Notification from '../screen/notification';
import DetailProduct from '../screen/detailProduct';
export default function AppRoute() {
  const context = useContext(Context);
  const [isLog, setIsLog] = [context.isLog, context.setIsLog];
  const [access, setAccess] = [context.access, context.setAccess];

  return (
    <BrowserRouter>
      <div className="route-main">
        <div className="route-grid">
          {access === false && <ImgOverlay props={[access, setAccess]} />}
          <div className="route-flex-box">
            <Header></Header>
            <Routes>
              <Route
                path="/"
                element={
                  <Page props={{ title: 'All product', id_page: 'all' }} />
                }
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
                element={
                  <Page props={{ title: 'New Product', id_page: 'new' }} />
                }
              ></Route>
              <Route
                path="/sale"
                element={
                  <Page props={{ title: 'On big sale', id_page: 'sale' }} />
                }
              ></Route>
              <Route
                path="/men"
                element={<Page props={{ title: 'For men', id_page: 'men' }} />}
              ></Route>
              <Route
                path="/women"
                element={
                  <Page props={{ title: 'For women', id_page: 'women' }} />
                }
              ></Route>

              <Route
                path="/gift"
                element={isLog ? <Gift /> : <div></div>}
              ></Route>
              <Route
                path="/notification"
                element={isLog ? <Notification /> : <div></div>}
              ></Route>
              <Route
                path="/cart"
                element={isLog ? <Cart /> : <div></div>}
              ></Route>
              <Route
                path="/order"
                element={isLog ? <Order /> : <div></div>}
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
