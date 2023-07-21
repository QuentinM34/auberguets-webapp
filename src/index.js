import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './utilities/reportWebVitals';
import App from "./components/App/App";
import AuberguetsTheme from "./assets/muiTheme";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <AuberguetsTheme>
        <App />
      </AuberguetsTheme>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
