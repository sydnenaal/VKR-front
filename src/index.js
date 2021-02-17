import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import { Preloader } from "./components";

const App = lazy(() => import("./app"));

ReactDOM.render(
  <Suspense fallback={<Preloader />}>
    <App />
  </Suspense>,
  document.getElementById("root")
);
