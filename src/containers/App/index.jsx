import React from 'react';
import {
  Route,
  Routes,
  BrowserRouter,
} from 'react-router-dom';

import { ROUTES } from 'Data/constants';

import Home from 'Containers/Home';

import './index.scss';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path={ROUTES.login} element={""}/>
      <Route path={ROUTES.home}  />
        <Route index element={<Home />} />
        <Route path={ROUTES.cart} element={""} />
        <Route path={ROUTES.gitf} element={""} />
        <Route path={ROUTES.profile} element={""} />
        <Route path={ROUTES.product} element={""} />
    </Routes>
  </BrowserRouter>
);

export default App;
