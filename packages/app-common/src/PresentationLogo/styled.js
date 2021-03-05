import styled from "styled-components";

export const Logo = styled.p`
  font-size: 40px;
  font-weight: 400;
  letter-spacing: 3px;
  margin: ${(props) => props.margin || "20px"};
  color: #647295;
  font-family: "Roboto Mono", monospace;
  text-shadow: 3px 0px #fff, 9px 8px 0px rgba(0, 0, 0, 0.05);
`;
