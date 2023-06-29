import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import App from './App';
import 'normalize.css';
import GlobalStyles from './GlobalStyles';
import * as ROUTES from './constants/routes';

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <App />,
  },
]);

createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
    <GlobalStyles />
  </>,
);
