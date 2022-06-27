import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Training from './routes/Training';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  
  document.getElementById('root')
);


