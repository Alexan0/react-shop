import React from 'react';
import { BrowserRouter as Router, HashRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import App from './App';

import { store } from "./redux/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>
);

