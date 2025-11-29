import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from "./components/Login/Login";
import reportWebVitals from './reportWebVitals';
import { Routes, Route, BrowserRouter } from "react-router";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
