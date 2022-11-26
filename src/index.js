import React from "react";
import { ReactDOM } from "react";

import { App } from './components/App.jsx';

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);