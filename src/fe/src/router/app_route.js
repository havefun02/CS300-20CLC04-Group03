import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useContext } from 'react';
import { Context } from '../context/context';
import Header from '../../../fe/src/component/header';
import './approute.css';
import { useState } from 'react';
import ImgOverlay from '../component/imgoverlay';
import Page from '../screen/shoppage';
import Footer from '../component/footer';
export default function AppRoute() {
  const context = useContext(Context);
  const [isLog, setIsLog] = [context.isLog, context.setIsLog];
  const [access, setAccess] = [context.access, context.setAccess];
  const [name, setName] = useState('Someone');

  console.log(isLog);
  return (
    <BrowserRouter>
      <div className="route-main">
        <div className="route-grid">
          {!access && <ImgOverlay props={[access, setAccess]} />}
          <div className="route-flex-box">
            <Header props={{ isLog, name }}></Header>
            <Routes>
              <Route
                path="/"
                element={<Page props={{ title: 'All product' }} />}
              ></Route>
              <Route
                path="/newin"
                element={<Page props={{ title: 'New in' }} />}
              ></Route>
              <Route
                path="/sale"
                element={<Page props={{ title: 'Sale' }} />}
              ></Route>
              <Route
                path="/men"
                element={<Page props={{ title: 'Men' }} />}
              ></Route>
              <Route
                path="/women"
                element={<Page props={{ title: 'Women' }} />}
              ></Route>
              <Route
                path="/bestseller"
                element={<Page props={{ title: 'Best seller' }} />}
              ></Route>
              <Route
                path="/liked"
                element={<Page props={{ title: 'Liked' }} />}
              ></Route>
            </Routes>
            {isLog ? (
              <Routes>
                <Route
                  path="/cart"
                  element={<Page props={{ title: 'Liked' }} />}
                ></Route>
                <Route
                  path="/buy"
                  element={<Page props={{ title: 'Liked' }} />}
                ></Route>
              </Routes>
            ) : (
              <Routes></Routes>
            )}
            <Footer />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
