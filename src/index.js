import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter } from "react-router-dom";
import { DataControllerProvider } from "./Context";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="154187564843-q4p5l0plkgs7bah9ad6nk9ovhdr6jhln.apps.googleusercontent.com">
    <BrowserRouter>
      <DataControllerProvider>
        <App />
      </DataControllerProvider>
    </BrowserRouter>
  </GoogleOAuthProvider>
);
