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

import './index.scss';

const App = () => (
  <BrowserRouter>
    <Routes>
      
      <Route path={ROUTES.login} element={<Login/>}/>
      <Route path={ROUTES.home} element={<Layout />} >
        <Route index element={<Home />} />
        <Route path={ROUTES.cart} element={""} />
        <Route path={ROUTES.gitf} element={""} />
        <Route path={ROUTES.profile} element={""} />
        <Route path={ROUTES.product} element={""} />
      </Route>

    </Routes>
  </BrowserRouter>
);

export default App;
