import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";

import { Preloader } from "./components";

const App = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(import("./routing")), 1000);
    })
);

ReactDOM.render(
  <Suspense fallback={<Preloader />}>
    <App />
  </Suspense>,
  document.getElementById("root")
);
