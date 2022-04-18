import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { RoomProvider } from './Context';

ReactDOM.render(
  <React.StrictMode>
    <RoomProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RoomProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


