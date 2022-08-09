import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
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
