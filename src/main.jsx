import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { LangProvider } from './components/langContext';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <LangProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </LangProvider>

)
