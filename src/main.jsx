import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './AppV1.1.1';
import './index1.css';
import { CookiesProvider } from 'react-cookie';
import { AppWrapper } from './AppContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CookiesProvider>
      <AppWrapper>
        <App />
      </AppWrapper>
    </CookiesProvider>
  </React.StrictMode>
);
