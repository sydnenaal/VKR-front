import styled from "styled-components";

import Button from "@atlaskit/button/standard-button";

import { COLORS_PRIMARY } from "@vkr/app-constants";

export const AuthContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS_PRIMARY.background};
`;

export const FormContainer = styled.div`
  width: 400px;
  min-width: 350px;
`;

export const SubmitContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledButton = styled(Button)`
  margin: 30px 30% 30px 30%;
  font-family: "Roboto Mono", monospace;
  width: 100% !important;
`;
