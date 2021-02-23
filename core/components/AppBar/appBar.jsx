import React, { memo } from "react";

import { AppBarContainer, AppTitle } from "./styled";

function AppBar() {
  return (
    <AppBarContainer>
      <AppTitle>
        <p>Time Manager</p>
      </AppTitle>
    </AppBarContainer>
  );
}

export default memo(AppBar);
