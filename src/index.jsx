import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import 'normalize.css';
import GlobalStyles from './global-styles';

createRoot(document.getElementById('root'))
  .render(
    <>
      <GlobalStyles />
      <App />
    </>,
  );
