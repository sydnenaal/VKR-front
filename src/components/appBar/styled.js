import styled from "styled-components";

export const AppBarContainer = styled.div`
  width: 100%;
  height: 7vh;
  min-height: 30px;
  background-color: #2d2f34;
`;

export const AppTitle = styled.div`
  height: 100%;
  width: 230px;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    margin: 0;
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 3px;
    color: #647295;
    font-family: "Roboto Mono", monospace;
    text-shadow: 3px 0px rgba(255, 255, 255, 0.15),
      6px 5px 0px rgba(0, 0, 0, 0.3);
  }
`;
