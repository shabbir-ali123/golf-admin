import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './css/style.css';
import './css/satoshi.css';
import 'jsvectormap/dist/css/jsvectormap.css';
import 'flatpickr/dist/flatpickr.min.css';
import { AuthContext } from './contexts/AuthContext';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
        <Router>

      <AuthContext>
        <App />
      </AuthContext>
      </Router>
  </React.StrictMode>,
);
