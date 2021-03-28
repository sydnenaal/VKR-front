import styled from 'styled-components'

function getAnimationItems() {
  let str = ''

  for (let i = 1; i <= 12; i++) {
    str += `
        div:nth-child(${i}) {
            transform: rotate(${30 * (i - 1)}deg);
            animation-delay: ${-1.5 + i * 0.125}s;
        }
    `
  }

  return str
}

export const Spinner = styled.div`
  display: inline-block;
  position: relative;
  width: 50px;
  height: 50px;

  div {
    transform-origin: 25px 25px;
    animation: lds-spinner 1.5s linear infinite;
  }

  div:after {
    content: ' ';
    display: block;
    position: absolute;
    top: 4px;
    left: 20px;
    width: 4px;
    height: 12px;
    border-radius: 20%;
    background: #647295;
  }

  ${getAnimationItems()}

  @keyframes lds-spinner {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }
`
