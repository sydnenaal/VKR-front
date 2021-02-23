import React from "react";

import { Spinner } from "./elements";

function SpinnerLoader() {
  return (
    <Spinner>
      {new Array(12).fill(1).map((_, i) => (
        <div key={i.toString()}></div>
      ))}
    </Spinner>
  );
}

export default SpinnerLoader;
