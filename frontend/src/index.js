import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
// import './index.css';
import './input.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import AuthState from './Context/AuthenContext/AuthState';
import SongState from './Context/SongContext/SongState';
import UserState from './Context/UserContext/UserState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <AuthState>
      <UserState>
        <SongState>
          <App />
        </SongState>
      </UserState>
    </AuthState>
  </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
