import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Sign_In_Context } from "./Components/Context/Sign_In_Context";

ReactDOM.render(
  <React.StrictMode>
    <Sign_In_Context>
      <App />
    </Sign_In_Context>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
