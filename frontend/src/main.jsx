import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './i18n/i18n.js';
import { CurrencyProvider } from './contexts/CurrencyContext.jsx';
import './index.css';
import './styles/product.css';
import './styles/checkout.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CurrencyProvider>
      <App />
    </CurrencyProvider>
  </React.StrictMode>
);
