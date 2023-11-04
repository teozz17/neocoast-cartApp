import React from 'react';
import {
  Route,
  Routes,
  BrowserRouter,
} from 'react-router-dom';

import { ROUTES } from 'Data/constants';

import Layout from 'Components/Layout';
import Home from 'Containers/Home';
import Login from 'Containers/Login';
import Profile from 'Containers/Profile';
import ProductView from 'Containers/ProductView';
import Cart from 'Containers/Cart';

import './index.scss';

const App = () => (
  <BrowserRouter>
    <Routes>
      
      <Route path={ROUTES.login} element={<Login />}/>
      <Route path={ROUTES.home} element={<Layout />} >
        <Route index element={<Home />} />
        <Route path={ROUTES.cart} element={<Cart />} >
          <Route path={':id'} />
          <Route path={''}  />
        </Route>
        <Route path={ROUTES.gitf} element={""} />
        <Route path={ROUTES.profile} element={<Profile />} />
        <Route path={ROUTES.product} element={<ProductView />} />
      </Route>

      {/* 404 not found route */}
      <Route path="*" element={""} />

    </Routes>
  </BrowserRouter>
);

export default App;
