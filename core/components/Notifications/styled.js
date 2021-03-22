import styled from "styled-components";

export const NotificationsContainer = styled.div`
  position: fixed !important;
  bottom: 0;
  right: 0;
  max-width: 400;
  margin: auto;
  padding: 15px;
`;

export const NotificationContainer = styled.div`
  height: auto;
  margin-bottom: ${({ isOpen }) => (isOpen ? "10px" : "0px")};
  cursor: pointer;

  transition: margin-bottom 0.3s;
`;
