import React, { memo } from "react";

import Avatar from "@atlaskit/avatar";

import { AppBarContainer, AppTitle } from "./styled";

export function AppBar() {
  return (
    <AppBarContainer>
      <AppTitle>
        <p>Time Manager</p>
        <Avatar />
      </AppTitle>
    </AppBarContainer>
  );
}
