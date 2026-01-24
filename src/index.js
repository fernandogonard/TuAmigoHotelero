import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import App from './App';

// Importamos fuentes desde Google
const linkEl = document.createElement('link');
linkEl.rel = 'stylesheet';
linkEl.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap';
document.head.appendChild(linkEl);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);