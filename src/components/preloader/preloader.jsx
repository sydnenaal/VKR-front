import React from "react";

import { PreloaderContainer } from "./elements";
import { PresentationLogo, SpinnerLoader } from "@vkr/app-common";

function PreloaderPage() {
  return (
    <PreloaderContainer>
      <PresentationLogo />
      <SpinnerLoader />
    </PreloaderContainer>
  );
}

export default PreloaderPage;
