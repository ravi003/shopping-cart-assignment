import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'regenerator-runtime/runtime';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import store from './store';

ReactDOM.render(
    <BrowserRouter>
    <Provider store={store}>
     <App />,
     </Provider>
    </BrowserRouter>,
     document.getElementById('app')
     
  );
  module.hot.accept();



