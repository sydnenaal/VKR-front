import styled, { createGlobalStyle } from "styled-components";

export const BodyStyle = createGlobalStyle`
  body {
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f2ebe5;
`;

export const Content = styled.div`
  position: fixed;
  z-index: 1;
  bottom: 0;
  right: 0;
  top: 7vh;
  left: 70px;
`;
