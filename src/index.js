import React from 'react';
import ReactDOM from 'react-dom/client';
import RouteProvider from './Route';
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <RouteProvider />
    </BrowserRouter>
  // </React.StrictMode>
);
