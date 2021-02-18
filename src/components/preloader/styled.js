import styled from "styled-components";

function getAnimationItems() {
  let str = "";

  for (let i = 1; i <= 12; i++) {
    str += `
            div:nth-child(${i}) {
                transform: rotate(${30 * (i - 1)}deg);
                animation-delay: ${-1.1 + i * 0.1}s;
            }
        `;
  }

  return str;
}

export const PreloaderContainer = styled.div`
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;

  position: absolute;
  min-width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f2ebe5;

  p {
    font-size: 50px;
    font-weight: 400;
    letter-spacing: 3px;
    color: #647295;
    font-family: "Roboto Mono", monospace;
    text-shadow: 3px 0px #fff, 9px 8px 0px rgba(0, 0, 0, 0.05);
  }
`;

export const Spinner = styled.div`
  color: official;
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  div {
    transform-origin: 30px 35px;
    animation: lds-spinner 1.5s linear infinite;
  }

  div:after {
    content: " ";
    display: block;
    position: absolute;
    top: 3px;
    left: 37px;
    width: 6px;
    height: 18px;
    border-radius: 20%;
    background: #647295;
  }

  ${getAnimationItems()}

  @keyframes lds-spinner {
    0% {
      transform-origin: 30px 30px;
      opacity: 1;
    }

    100% {
      transform-origin: 30px 35px;
      opacity: 0;
    }
  }
`;
