import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

import "../src/CSS/main.scss";
import configureStore from "./redux/configureStore";
import { Provider } from "react-redux";

const store = configureStore();

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
