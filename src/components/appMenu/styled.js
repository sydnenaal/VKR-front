import styled from "styled-components";

export const MenuContainer = styled.div`
  left: 0;
  top: 7vh;
  position: fixed;

  width: 70px;
  height: 100%;
  background-color: #383b40;

  overflow-x: hidden;
  z-index: 2;
  transition: all 0.3s ease-out;

  &:hover {
    width: 200px;
  }
`;

export const MenuItem = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  cursor: pointer;

  &:hover {
    background-color: #2d2f34;
  }
`;

export const MenuItemIcon = styled.div`
  width: 70px;
  min-width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MenuItemTitle = styled.div`
  display: flex;
  align-items: center;
  padding-left: 5px;
  color: white;
  height: 70px;
  width: 180px;
  font-family: "Roboto Mono", monospace;
`;
