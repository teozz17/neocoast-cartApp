import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import { ROUTES } from 'Data/constants';

import Home from 'Containers/Home';

import './index.scss';

const BrowserRouter = createBrowserRouter([
  {
    element: <Home />,
    path: ROUTES.home,
  },
]);

const App = () => (<RouterProvider router={BrowserRouter} />);

export default App;
