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
import { useState } from 'react';
export default function AppRoute() {
  const context = useContext(Context);
  const id_user = context.id;
  const [off, setOff] = useState(false);
  const [trigger, setTrigger] = [context.trigger, context.setTrigger];
  return (
    <BrowserRouter>
      <div className="route-main">
        <div className="route-grid">
          {off && <ImgOverlay props={[off, setOff]} />}
          <div className="route-flex-box">
            <Header props={[trigger, setTrigger]}></Header>
            <Routes>
              <Route
                path="/"
                element={
                  <Page
                    props={{
                      state: [trigger, setTrigger],
                      title: 'All product',
                      id_page: 'all'
                    }}
                  />
                }
              ></Route>
              <Route
                path={'/product/:id'}
                element={<DetailProduct props={[trigger, setTrigger]} />}
              ></Route>

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
                  <Page
                    props={{
                      state: [trigger, setTrigger],
                      title: 'New in',
                      id_page: 'new'
                    }}
                  />
                }
              ></Route>
              <Route
                path="/sale"
                element={
                  <Page
                    props={{
                      state: [trigger, setTrigger],
                      title: 'On big Sale',
                      id_page: 'sale'
                    }}
                  />
                }
              ></Route>
              <Route
                path="/men"
                element={
                  <Page
                    props={{
                      state: [trigger, setTrigger],
                      title: 'Men',
                      id_page: 'men'
                    }}
                  />
                }
              ></Route>
              <Route
                path="/women"
                element={
                  <Page
                    props={{
                      state: [trigger, setTrigger],
                      title: 'Women',
                      id_page: 'women'
                    }}
                  />
                }
              ></Route>

              <Route
                path="/gift"
                element={id_user !== null ? <Gift /> : <></>}
              ></Route>

              <Route
                path="/cart"
                element={id_user !== null ? <Cart /> : <></>}
              ></Route>
              <Route
                path="/order"
                element={id_user !== null ? <Order /> : <></>}
              ></Route>
              <Route
                path="/buy"
                element={id_user !== null ? <Page /> : <></>}
              ></Route>
              <Route
                path="/profile"
                element={id_user !== null ? <Profile /> : <></>}
              ></Route>
            </Routes>
            <Footer />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
