import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx'; // Note a extensão .tsx
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render( // O '!' afirma que o elemento não será nulo
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);