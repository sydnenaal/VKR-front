import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";

import { PreloaderPage } from "./components";

const Application = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(import("./routing")), 1000);
    })
);

ReactDOM.render(
  <Suspense fallback={<PreloaderPage />}>
    <Application />
  </Suspense>,
  document.getElementById("root")
);
