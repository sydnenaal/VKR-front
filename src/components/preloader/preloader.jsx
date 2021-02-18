import React from "react";

import { PreloaderContainer, Spinner } from "./styled";

function PreloaderPage() {
  return (
    <PreloaderContainer>
      <p>Time Manager</p>

      <Spinner>
        {new Array(12).fill(1).map((_, i) => (
          <div key={i.toString()}></div>
        ))}
      </Spinner>
    </PreloaderContainer>
  );
}

export default PreloaderPage;
